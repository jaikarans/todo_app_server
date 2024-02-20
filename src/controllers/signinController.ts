import { Request, Response } from "express"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"
import User from "../models/Users"

export const signInController = async (req:Request, res:Response) => {
  const usr = await User.findOne({email : `${req.body.email}`})
    .then(async (usr) => {
      console.log('user ', usr);
      const isPasswordMatched = await compare(req.body.password, usr.password);
      if (isPasswordMatched) {
        let jwtPayload = {id: usr._id, name: usr.name, email: usr.email};
        const jwtToken = sign(jwtPayload, process.env.JWT_SECRET);
        res.status(200).header("auth-token", jwtToken).send({"jwtToken": jwtToken});
      } else {
        res.status(401).send('email or password is wrong.');
      }
    })
}
