import AddBook from "@/components/AddBook";
import BookContainer from "@/components/BookContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import bookService from "../services/axiosReqs";

export interface IBookProps {
  name: string;
  author: string;
  currentPage: number;
  id?: string;
}

export interface IBookListProps {
  bookData: {
    name: string;
    author: string;
    currentPage: number;
    id?: string;
  }[];
}

function Home() {
  const [books, setBooks] = useState<IBookProps[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAuthor, setNewAuthor] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [forceRender, setForceRender] = useState(0);

  const deletingButton = async (e: any) => {
    await bookService.dropBook(e.target.id);
    setForceRender((c) => c + 1);
  };

  useEffect(() => {
    const getBooks = async () => {
      const response = await bookService.getAll();
      const bookList = await response.data;
      setBooks(bookList);
      console.log(bookList);
      console.log(response.status);
    };
    getBooks();
  }, [books]);

  const booksData: IBookListProps = {
    bookData: books,
  };

  const titleChange = (event: any) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  };

  const authorChange = (event: any) => {
    event.preventDefault();
    setNewAuthor(event.target.value);
  };
  const currentPageChange = (event: any) => {
    event.preventDefault();
    setCurrentPage(event.target.value);
  };

  // Adding a new book to the
  const addBook = async (event: any) => {
    event.preventDefault();

    const book:IBookProps = {
      name: newTitle,
      author: newAuthor,
      currentPage: currentPage,
    };
    await bookService.create(book);
    setNewTitle("");
    setNewAuthor("");
    setCurrentPage(0);
  };

  return (
    <div className=" bg-[#616247FF] z-0">
      <Head>
        <title>BookMarKT</title>
      </Head>
      <Header />
      {/* Header */}
      {/* Side  */}
      <section id="bestSellers" className="pt-20">
        <BookContainer
          bookData={booksData.bookData}
          onDelete={(e: Event) => deletingButton(e)}
        />
      </section>
      {/* */}
      <AddBook
        onSubmit={addBook}
        newTitle={newTitle}
        titleChange={titleChange}
        newAuthor={newAuthor}
        authorChange={authorChange}
        currentPage={currentPage}
        currentPageChange={currentPageChange}
      />
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}
      {/* */}

      <Footer />
    </div>
  );
}

export default Home;

{
  /* Colour list
#626D71 Slate
#CDCDC0 Ceramic
#DDBC95 Latte
#B38867 Coffee

#E3CD81FF Dusky Citron
#B1B3B3FF Cool Gray

Mango Mojito #DAA03DFF
Terrarium Moss #616247FF


data = {
    bookData: [
      {
        name: "Atomic Habits",
        author: "James Clear",
        currentPage: 12,
      },
      {
        name: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        currentPage: 204,
      },
      {
        name: "Black Box Thinking",
        author: "Not sure",
        currentPage: 84,
      },
      {
        name: "Mindset",
        author: "Dr. Carol Schwelick",
        currentPage: 91,
      },
      {
        name: "It Starts with Why",
        author: "Simon Sinek",
        currentPage: 307,
      },
    ],
  };


*/
}