'use strict';

//includes
const PostController = require('../controllers/post.controller');//Controller
const { verifyToken } = require('../middleware/auth');

module.exports = [

    //GET route for root '/' and returns a Welcome message
    { method: 'GET', path: '/', handler: (request, h) => {
            return 'Welcome to Anne-Liis API!';//response to klient
        }
    },
    { method: 'GET',    
        path: '/post',      
        handler: PostController.getAllPosts
    },
    { method: 'POST',   
        path: '/post',      
        handler: PostController.createNewPosts, 
        options: {
            pre: [{method:verifyToken}]}//protected endpoint
    }, 
    { method: 'DELETE', 
        path: '/post/{id}', 
        handler: PostController.deletePost,     
        options: {
            pre: [{method:verifyToken}]}//protected endpoint
    }, 
    { method: 'PUT',    
        path: '/post/{id}', 
        handler: PostController.updatePost,     
        options: {
            pre: [{method:verifyToken}]}//protected endpoint
    } 
];