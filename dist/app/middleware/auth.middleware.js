"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationCheck = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = require("../secret");
const authorizationCheck = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        if (!req.headers.authorization) {
            return res.status(400).json({ message: 'User aren`t authorized' });
        }
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'User aren`t authorized' });
        }
        jsonwebtoken_1.default.verify(token, secret_1.secret);
        next();
    }
    catch (e) {
        if (e instanceof Error)
            return res.status(500).json({ message: e.message });
        else
            return res.status(500).json(e);
    }
};
exports.authorizationCheck = authorizationCheck;
