"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_controller_1 = __importDefault(require("./auth.controller"));
const authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
const checkByEmail = (field, msg) => (0, express_validator_1.check)(field, msg).isEmail();
const checkByEmpty = (field, msg) => (0, express_validator_1.check)(field, msg).notEmpty();
const checkByLength = (field, msg, min = 1, max = 20) => (0, express_validator_1.check)(field, msg).isLength({ max: max, min: min });
authRouter.post('/registration', [
    checkByEmpty('login', 'Имя не должно быть пустым'),
    checkByLength('password', 'Пароль должен быть не более 10 и не менее 3 символов', 3, 10),
    checkByEmail('email', 'Email не соответствует установленным параметрам')
], auth_controller_1.default.registration);
authRouter.post('/login', auth_controller_1.default.login);
