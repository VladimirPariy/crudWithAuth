"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDbModel = void 0;
const objection_1 = require("objection");
class UsersDbModel extends objection_1.Model {
    static get tableName() {
        return 'users_knex';
    }
    static get idColumn() {
        return '_id';
    }
}
exports.UsersDbModel = UsersDbModel;
