import mongoose from "mongoose"
import productModel from "../models/productModel.js"
export const createProductController = async(req,res)=>{
    try{
        const product = await productModel.create({})
    }catch(error){
        console.log(error);
        return res.status(500).send({
          success: false,
          error,
          message: "Error creating product",
        });
    }
}