import express from 'express'
import * as userController from '../controller/user.controller.js'

const userRoute = express.Router()

userRoute.get("/", userController.getAllUsers)

userRoute.post("/", userController.createUser)

userRoute.get("/:id", userController.getUserById)

export default userRoute