const express = require("express");
const {
    GetBlogs,
    GetBlogById,
    UpdateBlogById,
    DeleteBlogById,
    CreateBlog,
    countByBlogCategory
} = require("../Controllers/blog");

const router = express.Router();

// CRUD routes
router.get("/", GetBlogs); 
router.get("/:id", GetBlogById); 
router.post("/", CreateBlog); 
router.put("/:id", UpdateBlogById);
router.delete("/:id", DeleteBlogById); 
router.get("/count/category", countByBlogCategory); 

module.exports = router;
