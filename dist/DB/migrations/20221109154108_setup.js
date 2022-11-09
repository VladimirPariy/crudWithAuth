"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const up = function (knex) {
    return knex.schema.createTable('users_knex', (table) => {
        table.increments('_id');
        table.string('login').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    });
};
exports.up = up;
const down = function (knex) {
    return knex.schema.dropTable('users_knex');
};
exports.down = down;
