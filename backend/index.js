import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import AuthRouter from "../backend/Routes/authRouter.js"
import NoteRouter from "../backend/Routes/NotesRouter.js"
import mongoose from "mongoose"

dotenv.config()

const server = express()

// Database Connect
const connect = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECTED WITH DB")
    } catch(error){
        throw(error)
    }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("Disconnected from server")
})

// PORT
const PORT = process.env.PORT || 8000

// Middlewares
server.use(express.json())
server.use(cors({
    origin: "https://notes-aws.vercel.app/", 
    credentials: true
}))
server.use(cookieParser())

// Routes
server.use('/api/v1/auth', AuthRouter)
server.use('/api/v1/notes', NoteRouter)


// LISTENING
server.listen(PORT, ()=>{
    connect()
    console.log(`Server started on Port ${PORT}`)
})