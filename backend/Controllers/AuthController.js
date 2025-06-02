import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import bcrypt from "bcrypt"

export const login = async (req,res)=>{
    const {userID, password} = req.body;

    if(!userID || !password){
        return res.status(400).json({success: false, message: "All the fields are mandatory!"})
    }

    try{
        const user = await User.findOne({userID})
        if(!user){
            return res.status(400).json({success: false, message: "No Accounts found! Please Register"})
        }

        const isMatched = await bcrypt.compare(password, user.password)
        if(!isMatched){return res.status(400).json({success: false, message: "Invalid Credentials!"})}

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_TOKEN, {expiresIn: "1d"})
        
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict"
        }).status(200).json({success: true, message: "Logged In Successfully", token: token, user: user.name})
    } catch(err){
        return res.status(400).json({success: false, message: "An error Occurred"})
    }
}

export const register = async (req,res)=>{
    const {name, userID, password} = req.body;
    if(!name || !userID || !password) {return res.status(400).json({success: false, message: "All fields are mandatory"})}

    try{
        const user = await User.findOne({userID})
        if(user){
            return res.status(400).json({success: false, message: "There is an existing account with this user ID"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({name, userID, password: hashedPassword})
        await newUser.save()

        return res.status(200).json({success: true, message: "Registered Successfully"})
        
    } catch(err){
        return res.status(400).json({success: false, message: "An error Occurred in Registering"})
    }
}