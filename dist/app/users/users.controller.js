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
const users_service_1 = __importDefault(require("./users.service"));
const userQueue_1 = require("../../Queue/userQueue");
const exceprion_1 = require("../exception/exceprion");
class UsersController {
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield users_service_1.default.getAll();
                return res.json(allUsers);
            }
            catch (e) {
                return (0, exceprion_1.exception)(res, e, 500);
            }
        });
    }
    getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const oneUserById = yield users_service_1.default.getOneById(id);
                return res.json(oneUserById);
            }
            catch (e) {
                return (0, exceprion_1.exception)(res, e, 500);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, userQueue_1.updateUserQueue)(req.body);
                return res.json('User updated');
            }
            catch (e) {
                return (0, exceprion_1.exception)(res, e, 500);
            }
        });
    }
    deleteAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteAllUsers = yield users_service_1.default.deleteAll();
                return res.json(deleteAllUsers);
            }
            catch (e) {
                return (0, exceprion_1.exception)(res, e, 500);
            }
        });
    }
    deleteOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteOneUser = yield users_service_1.default.deleteOne(req.params.id);
                return res.json(deleteOneUser);
            }
            catch (e) {
                return (0, exceprion_1.exception)(res, e, 500);
            }
        });
    }
}
exports.default = new UsersController();
