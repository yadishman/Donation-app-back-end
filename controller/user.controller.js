import User from "../models/user.model.js";
export const createUser = async (req,resp)=>{
    try{ 
        await User.create(req.body)
        resp.status(201).json({message: "User created successfuly"})
    }
    catch(error){
        resp.status(400).json({message: "failed to create user"})
        console.log(error)
    }
}

export const getAllUsers = async (req, resp)=>{

    try {
        const users= await User.find()
        resp.json(users).status(200)
    }
    catch(error){
        resp.json({message:`error occured ${error}`}).status(404)
    }
}

export const getUserById = async (req,resp)=>{
    try{  
        const user = await User.findById(req.params.id)
        resp.json(user).status(200)
    }
    catch(error){
        resp.json({message: `an error occured : ${error}`}).status(404)
    }

}

