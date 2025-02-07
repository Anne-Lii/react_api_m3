'use strict'

const Post = require('../models/post.model');

//Get all posts
exports.getAllPosts = async (request, h) => {

    try {
        const posts = await Post.find();

        if (posts.length > 0) {
            return h.response(posts).code(200);
        } else {
            return h.response({ message: 'There is no posts.' }).code(404); 
        }
    } catch (err) {
        return h.response({message: err.message}).code(500);
    }
};

//Create a new post
exports.createNewPosts = async (request, h) => {
    const { title, images = [], description  } = request.payload;

    try {
        const newPost = new Post({

            title,
            images,
            description
        });

        const savedPost = await newPost.save();
        return h.response({message: 'Post has been added.', savedPost}).code(201);
        
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};

//Delete a post
exports.deletePost = async (request, h) => {
    try {
        const {id} = request.params;
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return h.response({ message: 'Couldn´t find post.' }).code(404);
        } else {
            return h.response({ message: 'Post has been removed.', post: deletedPost }).code(200);
        }
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};