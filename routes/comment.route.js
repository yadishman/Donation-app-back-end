import express from 'express'
import * as commentController from '../controller/comment.controller.js'
const commentRoute = express.Router()

commentRoute.get("/", commentController.getAllComments )

commentRoute.post("/", commentController.createComment)

commentRoute.get("/:id", commentController.getCommentById)

commentRoute.get("/post/:id", commentController.getCommentsByPostId )

export default commentRoute