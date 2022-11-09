"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDB = void 0;
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
const objection_1 = require("objection");
const setupDB = () => {
    const db = (0, knex_1.default)(knexfile_1.default.development);
    objection_1.Model.knex(db);
};
exports.setupDB = setupDB;
