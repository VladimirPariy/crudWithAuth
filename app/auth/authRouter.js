import {Router} from 'express';import {check} from 'express-validator'import AuthController from "./AuthController.js";const authRouter = new Router()authRouter.post('/registration', [    check('name', 'Имя не должно быть пустым').notEmpty(),    check('pass', 'Пароль должен быть не более 10 и не менее 5 символов').isLength({max: 10, min: 5}),    check('email', 'Email не соответствует установленные параметрам').isEmail()], AuthController.registration)authRouter.post('/login', AuthController.login)export {authRouter};