import express, { response } from "express";
import Book from "../modules/models/book.js";
import User from "../modules/models/user.js";
const booksRouter = express.Router();

booksRouter.get("/", async (req, res) => {
  const books:any = await Book.find({});
  res.json(books);
});

booksRouter.post("/", async (req, res) => {
  const body = req.body;

  const user = await User.findById(body.userId);

  const book = new Book({
    name: body.name, 
    author: body.author,
    currentPage: body.currentPage,
  });

  const savedBook = await book.save();
  user!.books = user!.books.concat(savedBook._id);
  await user!.save();
  res.json(savedBook);
});

booksRouter.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).end();
  }
});

booksRouter.delete("/:id", async (req, res) => {
  await Book.findByIdAndRemove(req.params.id);
});


booksRouter.put("/:id", (req, res, next) => {
  const body = req.body;

  const book = {
    name: body.name,
    author: body.author,
    currentPage: body.currentPage,
  };

  Book.findByIdAndUpdate(req.params.id, book, { new: true })
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((error) => next(error));
});

export default booksRouter;
