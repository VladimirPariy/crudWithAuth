"use strict";
// // Update with your config settings.
//
// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'mysql',
            port: '3306',
            user: 'root',
            password: 'password',
            database: 'users_db',
            charset: 'utf8'
        },
    },
    staging: {},
    production: {}
};
