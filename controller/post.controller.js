import Post from "../models/post.model.js";
import { addTotalDonationAmount } from "../service/post-donation.js";
export const createPost = async (req,resp)=>{
    try{ 
        await Post.create({
            title : req.body.title,
            description : req.body.description,
            budget : req.body.budget,
            image : req.file.path,
            author : req.user.id
        })
        resp.status(201).json({message: "Post made successfuly"})
    }
    catch(error){
        resp.status(400).json({message: `failed to create post ${error}`})
        console.log(error)
    }
}

export const getAllPosts = async (req, resp)=>{

    try {
        const posts= await addTotalDonationAmount(await Post.find().populate('author'))
        resp.json(posts).status(200)
    }
    catch(error){
        resp.json({message:`error occured ${error}`}).status(404)
    }
}

export const getPostById = async (req,resp)=>{
    try{
        const post = await addTotalDonationAmount( await Post.findById(req.params.id).populate('author'))
        resp.json(post).status(200)
    }
    catch(error){
        resp.status(404).json({message: `an error occured : ${error}`})
    }

}


