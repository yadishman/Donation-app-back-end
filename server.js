import express from 'express'
import mongoose from 'mongoose'
import userRoute from './routes/user.route.js'
import postRoute from './routes/post.route.js'
import donationRoute from './routes/donation.route.js'
import commentRoute from './routes/comment.route.js'
import cors from "cors"
import authRoute from './routes/auth.route.js'

const PORT = process.env.PORT || 6000
const MONGO_URL = process.env.MONGO_URL

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors(
    {credentials: true, origin: "http://localhost:5173"}
))
app.use("/user", userRoute)
app.use("/post", postRoute)
app.use('/donate', donationRoute)
app.use('/comment', commentRoute)
app.use('/auth',authRoute)

const connectServer = async() => {
    await mongoose.connect(MONGO_URL)
    app.listen(PORT, ()=>{
        console.log(`Server is running on Port: ${PORT}`)
    })
}

connectServer()