import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export const createUser = async (req, resp) => {
    const { username, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return resp.json({ message: "User already exists with this email" }).status(400)
        }

        const hashedPassword = await bcrypt.hash(password, 12 )

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        const token = jwt.sign(
            {
                id : user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {expiresIn: "15m"}
        )
        resp.json(token)

    }
    catch (error) {
        resp.status(400).json({message: `An error occured : ${error}`})
    }
}

export const getAllUsers = async (req, resp) => {

    try {
        const users = await User.find()
        resp.json(users).status(200)
    }
    catch (error) {
        resp.json({ message: `error occured ${error}` }).status(404)
    }
}

export const getUserById = async (req, resp) => {
    try {
        const user = await User.findById(req.params.id)
        resp.json(user).status(200)
    }
    catch (error) {
        resp.json({ message: `an error occured : ${error}` }).status(404)
    }

}

