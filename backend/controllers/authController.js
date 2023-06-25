import mongoose from "mongoose";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const testApi = (req, res) => {
  res.send({
    success: true,
    message: "Test successful",
  });
};

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone, address } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "Name is required" });
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send({
          success: false,
          message: "A stronger password must be provided",
        });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .send({ success: false, message: "Passwords do not match" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "Email is required" });
    }
    if (!phone) {
      return res
        .status(400)
        .send({
          success: false,
          message: "Please enter a valid contact number",
        });
    }
    if (!address) {
      return res
        .status(400)
        .send({
          success: false,
          message: "Address na diley kaar baritey pathabo",
        });
    }
    const existEmail = await userModel.findOne({ email: email });
    if (existEmail) {
      return res
        .status(400)
        .send({ success: false, message: "Email already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const confirmHashedPassword = await hashPassword(confirmPassword);
    const userInfo = await userModel.create({
      ...req.body,
      password: hashedPassword,
      confirmPassword: confirmHashedPassword,
    });
    return res
      .setHeader("Content-Type", "application/json")
      .status(200)
      .send({
        success: true,
        message: "Successfully created the account",
        userInfo,
      });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error registering user",
      error: errorreturn,
    });
    console.log(error);
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid email or password" });
    }
    // check if the user is already registered or not
    const existUser = await userModel.findOne({ email: email });
    if (!existUser) {
      return res
        .status(401)
        .send({ success: false, message: "User does not exist" });
    }
    const matchPassword = await comparePassword(password, existUser.password);
    if (!matchPassword) {
      return res
        .status(401)
        .send({ success: false, message: "Please enter a valid password" });
    }

    // token
    const token = await JWT.sign(
      { _id: existUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return res.setHeader("Content-Type", "application/json").status(200).send({
      success: true,
      message: "User Logged in successfully",
      existUser,
      token,
    });
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error logging in user",
      error: error,
    });
    console.log(error);
  }
};

// forgot password
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }
    if (!answer) {
      return res
        .status(400)
        .send({ message: "Please fill in the correct answer" });
    }
    if (!newPassword) {
      return res
        .status(400)
        .send({ message: "Please enter your new Password" });
    }
    // check
    const user = await userModel.findOne({ email, answer });
    // validation
    if (!user) {
      return res
        .status(400)
        .send({
          success: false,
          message: "Please check your email and answer and try again",
        });
    }
    const hashed = await hashPassword(newPassword)
    await userModel.findOneAndUpdate(user._id,{password:hashed, confirmPassword:hashed});
    return res.status(200).send({ success:true, message:"password updated successfully"})
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error });
  }
};
