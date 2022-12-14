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
const users_dbmodel_1 = require("../../DB/models/users.dbmodel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = require("../secret");
class AuthService {
    getUserByNameOrEmail(login = '', email = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dbmodel_1.UsersDbModel.query()
                .where({ login })
                .orWhere({ email });
        });
    }
    registration(login, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPass = bcryptjs_1.default.hashSync(password, 7);
            return users_dbmodel_1.UsersDbModel.query()
                .insert({ login, email, password: encryptedPass });
        });
    }
    getToken(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.sign({ _id }, secret_1.secret, { expiresIn: "2h" });
        });
    }
}
exports.default = new AuthService();
