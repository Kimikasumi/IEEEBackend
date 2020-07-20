"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
function default_1(req, res, next) {
    const token = req.header('auth-token');
    if (!token)
        return res.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token, "token");
        req.body.user = verified;
        next();
    }
    catch (error) {
        res.status(400).send('Invalid token');
    }
}
exports.default = default_1;
