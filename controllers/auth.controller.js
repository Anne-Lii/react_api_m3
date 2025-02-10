'use strict'

const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//register a new user
exports.register = async (request, h) => {
    const { username, password } = request.payload;

    try {

        const existingUser = await User.findOne({username});

        if (existingUser) {
            return h.response({message: 'Användarnamnet finns redan'}).code(400);
        } else {
            const newUser = new User ({username, password});
            await newUser.save();
        }
        
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};

//login
exports.login = async (request, h) => {
    const { username, password } = request.payload;

    try {

        const user = await User.findOne({username});
        const matchedPassword= await user.comparePassword(password);

        if (!user|| !matchedPassword) {
            return h.response({message: 'Felaktigt användarnamn eller lösenord'}).code(401);
        } else {
            const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
                expiresIn: '1h'// jwt token valid for one hour
            });
    
            return h.response({ token }).code(200);
        }
        
    } catch (error) {
        return h.response({ message: error.message }).code(500);
    }
};