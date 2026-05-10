import jwt from 'jsonwebtoken'

export const authMiddleware = async(req, resp, next )=>{

    try{
        const authHeaders = req.headers.authorization
        if(!authHeaders){
            return resp.status(401).json({message: "no token found"})
        }
        const token = authHeaders.split(" ")[1]
        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user = decode

        next()
    }

    catch (error){
        resp.status(401).json({message : "invalid token"})
    }
}