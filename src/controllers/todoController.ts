import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import TodoList from "../models/Todos";

export const createTodo = async (req:Request, res:Response) => {
  const token = req.headers.authorization.split(' ')[1]
  const user = JSON.stringify(decode(token));
  const user_id = JSON.parse(user).id

  TodoList.create({"user_id": user_id, "todoList": req.body.data})
    .then ((todo) => {
      console.log('todoList Create: ', todo)
    })
    .catch(e => (console.log('createTodo : ', e)))

  
}