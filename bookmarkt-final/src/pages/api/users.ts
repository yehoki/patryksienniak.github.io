import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcrypt';
import { json } from "stream/consumers";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    await dbConnect();
    console.log('Connected to DB');
    try {

        const {username, name, password} = req.body;
        console.log(username, name, password);
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds)
        console.log(passwordHash);
        const user = new User({
            username,
            name,
            passwordHash
        })
        console.log(user);
        const savedUser = await user.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
    } catch (err){
        res.status(400).json({success: false, info: req.body})
    }
  }