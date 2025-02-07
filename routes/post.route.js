'use strict';

module.exports = [
    {   //GET route for root '/' and returns a Welcome message
        method: 'GET',//HTTP method
        path: '/',//URL path
        handler: (request, h) => {//function that handles the request

            return 'Welcome to Anne-Liis API!';//response to klient
        }
    },
    {   //GET route to get all posts
        method: 'GET',
        path: '/post',
        handler: PostController.getAllPost //calls the getAllPost function in the controller
    },
    {   //POST route to create new post
        method: 'POST',
        path: '/post',
        handler: PostController.createNewPost
    },
    {   //DELETE route to delete a post by id
        method: 'DELETE',
        path: '/post/{id}',
        handler: PostController.deletePost
    },
    {   //PUT route to update a post by id
        method: 'PUT',
        path: '/post/{id}',
        handler: PostController.updatePost
    }
];