import express from "express";
import { testApi, registerUser, loginUser } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router()


// register user
router.post('/register', registerUser)
// login user
router.post('/login', loginUser)
// test api route
router.get('/test', requireSignIn, isAdmin, testApi)

export default router