'use strict'

const jwt = require('jsonwebtoken');


//verify users token
exports.verifyToken = (request, h) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return h.response({ message: 'Det finns ingen token.' }).code(403).takeover();
    }

    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.auth = decoded;
        return h.continue;

    } catch (error) {
        return h.response({ message: 'Ogiltig token.' }).code(401).takeover();
    }

};