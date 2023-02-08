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
    passwordHash: String
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
    }
  })

const User = mongoose.models.User || mongoose.model('User', userSchema) 

export default User;

