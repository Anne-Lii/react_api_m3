'use strict'

const mongoose = require('mongoose'); //Imports Mongoose library 

const postSchema = new mongoose.Schema({
    
    title:       { type: String, required: true},
    createdAt:   { type: Date, default: Date.now } ,
    images:      [{type: String}], //to store pictures
    description: { type: String, required: true}    
});

module.exports = mongoose.model('Post', postSchema)