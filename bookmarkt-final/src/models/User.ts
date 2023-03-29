import * as mongoose from 'mongoose';
import bcrypt from 'bcrypt';
mongoose.set(`strictQuery`, false);


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    passwordHash: String,
    books: {
      type: [{
      id: String,
      currentPage: Number}],
    }
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
      returnedObject.books.map((item:any) => {
        delete item._id
      })
    }
  })

const User = mongoose.models.User || mongoose.model('User', userSchema) 

export default User;

