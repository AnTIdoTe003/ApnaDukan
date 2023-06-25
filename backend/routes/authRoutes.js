import express from "express";
import { testApi, registerUser, loginUser, forgotPasswordController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()


// register user
router.post('/register', registerUser)
// login user
router.post('/login', loginUser)

// forgot password
router.post('/forgot-password', forgotPasswordController)

// test api route
router.get('/test', requireSignIn, isAdmin, testApi)

// protected route
router.get('/user-auth', requireSignIn, (req,res)=>{
     res.status(200).send({"success":true})
})


// admin auth
router.get('/admin-auth', requireSignIn, isAdmin,(req,res)=>{
     res.status(200).send({"success":true})
})

export default router