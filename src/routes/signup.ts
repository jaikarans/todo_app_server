import { createNewUserController } from "../controllers/signupController"
import {Router} from "express"

const signupRouter = Router()

signupRouter.post('/', createNewUserController)

export default signupRouter
