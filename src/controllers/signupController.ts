import {Request, Response} from 'express'
import User from "../models/Users"
import { sign } from 'jsonwebtoken';

export const createNewUserController = async (req:Request, res:Response) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  
  // find if user's email alredy registered
  const userAlreadyRegistered = await User.findOne({email : newUser.email});
  if (!userAlreadyRegistered) {
    await User.create(newUser)
      .then((usr) => {
        let jwtPayload = {id: usr._id, name: usr.name, email: usr.email};
        const jwtToken = sign(jwtPayload, process.env.JWT_SECRET);
        res.status(200).header('auth-token', jwtToken).send({"jwtToken": jwtToken});
        console.log('usr created: ', usr)
      })
      .catch((reason) => (console.log('newUser not created due to reason ', reason)))
    // res.status(200).send('you have been registerd please login...')
  } else {
    res.status(403).send('User with this email already exist please use another email')
  }

}