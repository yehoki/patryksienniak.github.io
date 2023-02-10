import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";


{
    /*
const getTokenFrom = (req:NextApiRequest) => {
    const auth = req.get('authorization');
    if (auth && auth.startsWith('Bearer ')) {

    }
}
 */
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Confirm connection to DB
  await dbConnect();

  // switch based on GET and POST requests

  const { method } = req;

  switch (method) {
    case "GET":

      break;

    case "POST":
      console.log(method);
      const { username, password } = req.body;
      // find the relevant user - since usernames are set to unique this will be unique
      const user = await User.findOne({ username });
      console.log(user);
      // if user exists - check password, otherwise return false
      const passwordCheck =
        user === null
          ? false
          : await bcrypt.compare(password, user.passwordHash);
      if (!(user && passwordCheck)) {
        return res.status(401).json({
          error: "Invalid username or password",
        });
      }
      // Get the user details post authentication used to create a user token
      const userToken = {
        username: user.username,
        id: user._id,
      };
      // Creating a token for the user details to sign in with
      const token = jsonwebtoken.sign(userToken, process.env.SECRET!);
      // Returning correct 200 response

      console.log({token, username: user.username, name: user.name, id: user._id})
      res
        .status(200)
        .send({
          token,
          username: user.username,
          name: user.name,
          id: user._id,
        });
        
        break;

    default:
      console.log("Wrong API request");
      break;
  }
}
