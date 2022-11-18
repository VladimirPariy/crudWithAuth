"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = require("./app/users/users.router");
const auth_router_1 = require("./app/auth/auth.router");
const logging_1 = require("./app/logging");
const setupDB_1 = require("./DB/setupDB");
// import os from "os";
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', users_router_1.usersRouter);
app.use('/api', auth_router_1.authRouter);
const version = '1.0.1.1';
app.get('/', (req, res) => res.send({ version }));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(PORT);
        (0, setupDB_1.setupDB)();
        logging_1.logger.info(`Server started and running on http://${HOST}:${PORT}`);
    }
    catch (e) {
        if (e instanceof Error)
            logging_1.logger.error(e.message);
    }
}))();
