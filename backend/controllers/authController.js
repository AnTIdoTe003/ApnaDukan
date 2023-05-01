import mongoose from "mongoose"
import userModel from '../models/userModel.js'
import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import JWT from 'jsonwebtoken'
export const testApi =(req, res)=>{
    res.send({
        success: true,
        message: 'Test successful'
    })
}

// Register User
export const registerUser = async(req, res)=>{
    try{
        const{name, email, password, confirmPassword, phone, address} = req.body
        if(!name){
            res.status(400).send({success:false, message: 'Name is required'})
        }
        if(!password || password.length <6){
            res.status(400).send({success:false, message: 'A stronger password must be provided'})
        }
        if(password !== confirmPassword){
            res.status(400).send({success:false, message: 'Passwords do not match'})
        }
        if(!email){
            res.status(400).send({success:false, message: 'Email is required'})
        }
        if(!phone){
            res.status(400).send({success:false, message: 'Please enter a valid contact number'})
        }
        if(!address){
            res.status(400).send({success:false, message: 'Address na diley kaar baritey pathabo'})
        }
        const existEmail = await userModel.findOne({email: email})
        if(existEmail){
            res.status(400).send({success:false, message:'Email already exists'})
        }
        const hashedPassword = await hashPassword(password)
        const confirmHashedPassword = await hashPassword(confirmPassword)
        const userInfo = await userModel.create({...req.body, password:hashedPassword, confirmPassword:confirmHashedPassword})
        return res.status(200).send({success:true, message:"Successfully created the account", userInfo})
    }catch(error){
        res.status(404).send({
            success:false,
            message:"Error registering user",
            error:error
        })
        console.log(error)
    }
}


// Login User
export const loginUser = async(req,res)=>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            res.status(401).send({success:false, message:"Invalid email or password"})
        }
        const existUser = await userModel.findOne({email:email})
        if(!existUser){
            res.send(401).status({success:false, message:"User does not exist"})
        }
        const matchPassword = await comparePassword(password, existUser.password)
        if(!matchPassword){
            res.status(401).send({success:false, message:"Please enter a valid password"})
        }

        // token
        const token = await JWT.sign({_id:existUser._id}, process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(200).send({
            success:true,
            message:"User Logged in successfully",
            existUser,
            token
        })
    }catch(error){
        res.status(404).send({
            success:false,
            message:"Error loggin in user",
            error:error
        })
        console.log(error)
    }
    }

