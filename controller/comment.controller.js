import Comment from "../models/comment.model.js";

export const createComment = async (req,resp)=>{
    try{ 
        await Comment.create(req.body)
        resp.status(201).json({message: "Comment made successfuly"})
    }
    catch(error){
        resp.status(400).json({message: "failed to create comment"})
        console.log(error)
    }
}

export const getAllComments = async (req, resp)=>{

    try {
        const comments= await Comment.find()
        resp.json(comments).status(200)
    }
    catch(error){
        resp.json({message:`error occured ${error}`}).status(404)
    }
}

export const getCommentById = async (req,resp)=>{
    try{  
        const comment = await Comment.findById(req.params.id)
        resp.json(comment).status(200)
    }
    catch(error){
        resp.json({message: `an error occured : ${error}`}).status(404)
    }

}

export const getCommentsByPostId = async(req, resp) =>{
    try{
        const comments = await Comment.find({post:req.params.id}).populate('author')
        resp.json(comments).status(200)
    }
    catch(error){
        resp.json({message: `an error occured: ${error}`}).stautus(404)
    }
}