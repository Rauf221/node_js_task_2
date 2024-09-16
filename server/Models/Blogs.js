const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.set('strictQuery', true);

const BlogsSchema = new Schema({
    imgUrl: { type: String, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },  
});

const Blog = mongoose.model("Blog", BlogsSchema);

module.exports = Blog;
