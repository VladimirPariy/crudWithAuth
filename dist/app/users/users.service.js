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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_dbmodel_1 = require("../../DB/models/users.dbmodel");
class UsersService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dbmodel_1.UsersDbModel.query();
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dbmodel_1.UsersDbModel.query()
                .findById(id);
        });
    }
    update(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userInfo._id)
                throw new Error('No id');
            if (userInfo.password)
                userInfo.password = bcryptjs_1.default.hashSync(userInfo.password, 7);
            const { _id: userID } = userInfo, reqBodyWithoutID = __rest(userInfo, ["_id"]);
            return users_dbmodel_1.UsersDbModel.query()
                .patchAndFetchById(userID, reqBodyWithoutID);
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dbmodel_1.UsersDbModel.query()
                .delete();
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dbmodel_1.UsersDbModel.query()
                .deleteById(id);
        });
    }
}
exports.default = new UsersService();
