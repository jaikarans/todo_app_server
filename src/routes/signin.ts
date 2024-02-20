import {Router} from "express"
import { signInController } from "../controllers/signinController"

const signinRouter = Router()

signinRouter.post('/', signInController)

export default signinRouter
