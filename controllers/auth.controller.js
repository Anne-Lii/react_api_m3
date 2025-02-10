'use strict'

const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (request, h) => {
    const { username, password } = request.payload;

    try {

        const existingUser = await User.findOne({username});

        if (existingUser) {
            return h.response({message: 'Användarnamnet finns redan'}).code(400);
        }else {
            const newUser = new User ({username, password});
            await newUser.save();
        }
        
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};