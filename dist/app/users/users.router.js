"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = __importDefault(require("./users.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.get('/users', auth_middleware_1.authorizationCheck, users_controller_1.default.getAllUsers);
usersRouter.get('/users/:id', auth_middleware_1.authorizationCheck, users_controller_1.default.getOneUser);
usersRouter.patch('/users', auth_middleware_1.authorizationCheck, users_controller_1.default.updateUser);
usersRouter.delete('/users/:id', auth_middleware_1.authorizationCheck, users_controller_1.default.deleteOneUser);
usersRouter.delete('/users', auth_middleware_1.authorizationCheck, users_controller_1.default.deleteAllUsers);
