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
            host: '127.0.0.1',
            user: 'test-user',
            password: 'password',
            database: 'usersBDForCRUD',
            charset: 'utf8'
        },
    },
    staging: {},
    production: {}
};
