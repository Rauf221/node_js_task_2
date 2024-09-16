const Blog = require("../Models/Blogs");
const createError = require("../utils/error");

async function GetBlogs(req, res, next) {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        next(err);
    }
}

async function countByBlogCategory(req, res, next) {
    try {
        const categoriesCount = await Blog.aggregate([
            { "$group": { _id: "$category", count: { $sum: 1 } } }  
        ]);
        res.status(200).json(categoriesCount);
    } catch (err) {
        next(err);
    }
}

async function GetBlogById(req, res, next) {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        res.status(200).json(blog);
    } catch (err) {
        next(err);
    }
}

async function UpdateBlogById(req, res, next) {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json(updatedBlog);
    } catch (err) {
        next(err);
    }
}

async function DeleteBlogById(req, res, next) {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog has been deleted.");
    } catch (err) {
        next(err);
    }
}

async function CreateBlog(req, res, next) {
   
    const newBlog = new Blog(req.body);
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    GetBlogs,
    GetBlogById,
    UpdateBlogById,
    DeleteBlogById,
    CreateBlog,
    countByBlogCategory
};
