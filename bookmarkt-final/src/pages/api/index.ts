import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/models/Book";



console.log(Book);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  console.log(method);
  await dbConnect();
  console.log('connected now');
  console.log(req.body);
  console.log(process.env.MONGODB_URI);
  try {
    console.log('before)');
    console.log(typeof Book);
    const books = await Book.find({}); /* find all the data in our database */
    console.log('books', books);
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.log();
    res.status(400).json({ success: false });
  }
}
