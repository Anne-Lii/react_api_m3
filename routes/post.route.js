'use strict';

//includes
const PostController = require('../controllers/post.controller');//Controller


module.exports = [

    //GET route for root '/' and returns a Welcome message
    { method: 'GET', path: '/', handler: (request, h) => {
            return 'Welcome to Anne-Liis API!';//response to klient
        }
    },
    { method: 'GET',    path: '/post',      handler: PostController.getAllPosts},
    { method: 'POST',   path: '/post',      handler: PostController.createNewPosts},
    { method: 'DELETE', path: '/post/{id}', handler: PostController.deletePost},
    { method: 'PUT',    path: '/post/{id}', handler: PostController.updatePost}
];