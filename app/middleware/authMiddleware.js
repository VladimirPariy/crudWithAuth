import jwt from "jsonwebtoken";import {secret} from '../config.js'export const authorizationCheck = (req, res, next) => {    if (req.method === 'OPTIONS') {        next()    }    try {        if (!req.headers.authorization) {            return res.status(400).json({message: 'User aren`t authorized'})        }        const token = req.headers.authorization.split(' ')[1];        if (!token) {            return res.status(400).json({message: 'User aren`t authorized'})        }        const tokenDecoder = jwt.verify(token, secret)        req.user = tokenDecoder;        next()    } catch (e) {        console.log(e)        return res.status(400).json({message: 'User aren`t authorized'})    }}