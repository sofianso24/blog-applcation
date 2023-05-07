import  Express  from "express";

import { register,login,logout } from "../controllers/userController.js";

export const userRouter = Express.Router()


userRouter.post("/register",register)
userRouter.get("/logIn",login)
userRouter.get("/logOut",logout)