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
exports.updateUserQueue = void 0;
const bull_1 = __importDefault(require("bull"));
const users_service_1 = __importDefault(require("../app/users/users.service"));
const userQueue = new bull_1.default('user', {
    redis: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});
const updateUserQueue = (user) => {
    userQueue.add(user, { delay: 60000 });
};
exports.updateUserQueue = updateUserQueue;
userQueue.process((job) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield users_service_1.default.update(job.data);
    }
    catch (e) {
        if (e instanceof Error)
            console.log(e.message);
        else
            console.log(e);
    }
}));
