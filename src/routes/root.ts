import { Request, Response } from "express";

const handleRoot = (_req:Request, res:Response) => {
  console.log('/ was clicked')
  // res.status(200).send('hi from root /')
  res.json({message: "hi from api"})
}

export default handleRoot;