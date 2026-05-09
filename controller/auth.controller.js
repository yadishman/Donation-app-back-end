import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const loginUser = async(req,resp)=>{
    const {email,password} = req.body

    try{
    const existingUser =  await User.findOne({email})
    if(!existingUser) {
        return resp.staus(400).json({message: "Invalid credentials"})
    }
    
    const isMatch = await bcrypt.compare(password, existingUser.password)
    if(!isMatch) {
        return resp.status(400).json({message : "Invalid credentials"})
    }
    const token = jwt.sign(
                {
                    id : existingUser._id,
                    role: existingUser.role
                },
                process.env.JWT_SECRET,
                {expiresIn: "1hr"}
            )
            resp.json(token)
    }
catch (error){
    resp.status(404).json({message: `Unexpected error occured :  ${error}`})
}
}