import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Connect to DB
  await dbConnect();

  const { method } = req;
  console.log(method);
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, users: users });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { username, name, password } = req.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const user = new User({
          username,
          name,
          passwordHash,
        });
        console.log(user);
        const savedUser = await user.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(400).json({ success: false, info: req.body });
      }
      break;

    case "PUT":
      try {
        // separate all the data from the request
        const { username, name, newPassword } = req.body;
        const saltRounds = 10;
        // generate a hash for the new password
        const passwordHash = await bcrypt.hash(newPassword, saltRounds);
        // find the current user by username - since they're unique
        const newUser = new User({
          username,
          name,
          passwordHash,
        });
        const currentUser = await User.findOneAndUpdate({username: username}, newUser);
        res.status(200).json(currentUser);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      console.log("Incorrect");
      break;
  }
}
