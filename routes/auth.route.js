import express from "express"
import * as AuthController from "../controller/auth.controller.js"

const authRoute = express.Router()

authRoute.post("/", AuthController.loginUser)

export default authRoute