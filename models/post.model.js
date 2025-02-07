'use strict'

const mongoose = require('mongoose'); //Imports Mongoose library 

const postSchema = new mongoose.Schema({
    
    title:       { type: String, required: true},
    description: { type: String, required: true},
    images:      [{type: String}], //to store pictures
    createdAt:   { type: Date, default: Date.now }
    

});

module.exports = mongoose.model('Post', postSchema)