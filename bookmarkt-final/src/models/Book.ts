import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv'

mongoose.set(`strictQuery`, false);


const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  currentPage: Number,
});

bookSchema.set(`toJSON`, {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
})


const Book = mongoose.models.Book || mongoose.model('Book', bookSchema) 

export default Book;

