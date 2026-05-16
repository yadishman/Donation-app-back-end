import express from 'express'
import * as postController from '../controller/post.controller.js'
import upload from '../middleware/upload.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const postRoute = express.Router()

postRoute.get("/", postController.getAllPosts)

postRoute.post("/", authMiddleware, upload.single("image"), postController.createPost)

postRoute.get("/:id", postController.getPostById)

postRoute.put("/:id", authMiddleware, upload.single("image"), postController.modifyPost)

postRoute.delete("/:id", authMiddleware, postController.deletePost)

export default postRoute