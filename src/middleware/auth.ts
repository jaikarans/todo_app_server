import { Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

const verifyUserJWT = (req:Request, res:Response, next:any): Response => {
  let token = req.headers.authorization;
  console.log(token);

  //if token doesn't exists
  if(!token) return res.status(401).send('Access Denied');

  try {
    token = token.split(' ')[1];

    if (token === 'null' || !token) return res.status(401).send('Access Denied');

    let userVerified = verify(token, process.env.JWT_SECRET);

    if (!userVerified) return res.status(401).send('Access Denied');

    console.log('user jwt verified: ', userVerified)

    next()

  } catch (error) {
    res.status(400).send('invalid Token');
  }
  
}

export default verifyUserJWT;