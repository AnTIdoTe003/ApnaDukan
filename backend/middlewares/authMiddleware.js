import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

// route protection token based
export const requireSignIn = async(req, res, next) =>{
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.existUser = decode
        next()
        
    }catch(error){
        console.log(error)
    }
}

// Admin Access Token
export const isAdmin = async(req, res, next) =>{
    try{
        const user = await userModel.findById(req.existUser._id)
        if(user.role===0){
            res.status(401).send({message:"Authorization Completed"})
        }else{
            next()
        }
    }catch(error){
        console.log(error)
    }
}