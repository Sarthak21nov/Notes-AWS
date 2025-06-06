import jwt from "jsonwebtoken"

export const protect = (req,res,next)=>{
    
    console.log(req.cookies.token)
    const token = req.cookies.token

    if(!token){
        return res.status(400).json({
            success: false,
            message: "Invalid Access! Please Login to continue"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
        req.user = decoded.id;
        next()
    } catch (err){
        return res.status(401).json({
            success: false,
            message: "An error occurred",
            error: err
        })
    }
}