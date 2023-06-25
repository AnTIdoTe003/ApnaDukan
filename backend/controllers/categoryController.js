import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existCategory = await categoryModel.findOne({ name: name });
    if (existCategory) {
      return res
        .status(401)
        .send({ success: true, message: "Category already exists" });
    }
    const category = await categoryModel.create({ name, slug: slugify(name) });
    return res
      .status(201)
      .send({
        success: true,
        message: "Category created successfully",
        category,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error,
      message: "Error creating category",
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    return res.status(201).send({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      error,
      message: "Error updating category",
    });
  }
};

// get all categories
export const getAllCategoryController = async (req, res) => {
  try{
    const allCategories = await categoryModel.find({});
    return res.status(200).send({success:true, message:"All categories fetched", allCategories});
  }catch(error){
    console.log(error) 
    return res.status(500).send({
      success: false,
      error,
      message: "Error fetching all category",
    });
  }
}

// get single category
export const getSingleCategoryController = async (req, res) => {
  try{
    const {slug} = req.params
    const getSingleCategory = await categoryModel.findOne({slug})
    return res
      .status(200)
      .send({
        success: true,
        message: "Single category fetched",
        getSingleCategory,
      });
  }catch(error){
    console.log(error);
    return res.status(500).send({
      success: false,
      error,
      message: "Error fetching single category",
    });
  }
}

// delete category
export const deleteCategoryController = async (req, res) => {
  try{
    const {id}  = req.params
    await categoryModel.findByIdAndDelete(id)
       return res.status(200).send({
         success: true,
         message: "Category deleted successfully",
       
       });
  }catch(error){
     console.log(error);
     return res.status(500).send({
       success: false,
       error,
       message: "Couldn't delete category",
     });
  }
}