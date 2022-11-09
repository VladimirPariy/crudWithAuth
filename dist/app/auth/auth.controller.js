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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const auth_service_1 = __importDefault(require("./auth.service"));
const logging_1 = require("../logging");
class AuthController {
    registration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, password, email } = req.body;
                const validationError = (0, express_validator_1.validationResult)(req);
                if (!validationError.isEmpty()) {
                    logging_1.logger.error(validationError.array()[0].msg);
                    return res.status(400).json({ errors: validationError.array });
                }
                const candidate = yield auth_service_1.default.getUserByNameOrEmail(login, email);
                if (candidate.length) {
                    logging_1.logger.error(`User with ${login} and email ${email} already exists`);
                    return res.status(400).json({ message: 'User already exists' });
                }
                yield auth_service_1.default.registration(login, email, password);
                logging_1.logger.info(`User with name ${login} and email ${email} successfully registered`);
                return res.json({ message: 'User successfully registered' });
            }
            catch (e) {
                if (e instanceof Error) {
                    logging_1.logger.error(e.message);
                    res.status(500).json(e.message);
                }
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { login, email, password } = req.body;
                const user = yield auth_service_1.default.getUserByNameOrEmail(login, email);
                if (user.length < 1) {
                    logging_1.logger.error(`User with name ${login} and email ${email} is not found`);
                    return res.status(400).json({ message: `User is not found` });
                }
                const validPassword = bcryptjs_1.default.compareSync(password, user[0].password);
                if (!validPassword) {
                    logging_1.logger.error(`User with name ${login} and email ${email} inputted invalid password`);
                    return res.status(400).json({ message: `User inputted invalid password` });
                }
                const token = yield auth_service_1.default.getToken(user[0]._id);
                console.log(token);
                logging_1.logger.info(`User with name ${login} or email ${email} authorization`);
                return res.json({ token });
            }
            catch (e) {
                if (e instanceof Error) {
                    logging_1.logger.error(e.message);
                    res.status(500).json(e.message);
                }
            }
        });
    }
}
exports.default = new AuthController();
