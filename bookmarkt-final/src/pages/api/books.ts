import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnect";
import Book from "@/models/Book";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  console.log(method);

  await dbConnect();

  try {
    console.log(req.body);
    const book = await Book.create(req.body);

    res.status(200).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ sucess: false, err: err });
  }
}

{
  /*import express from "express";

const app = express();
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import cors from  'cors';
import usersRouter from "./src/services/users.js";
import  booksRouter  from "./src/services/books.js";

dotenv.config();

mongoose.set('strictQuery', false);

const url = process.env.MONGODB_URI;

const port = process.env.PORT;

console.log(`Connecting to  `, url);

mongoose
  .connect(url!)
  .then((result) => {
    console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: `, error.message);
  });

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

export default app; */
}
