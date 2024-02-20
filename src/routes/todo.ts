import { Router } from "express"
import verifyUserJWT from "../middleware/auth"
import { createTodo } from "../controllers/todoController"

const todoRouter = Router()

todoRouter.post('/',verifyUserJWT, createTodo)

export default todoRouter