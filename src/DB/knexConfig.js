import mysql2 from 'mysql2';
import knex from 'knex';

const config = {
	client: 'mysql2',
	connection: {
		host: '127.0.0.1',
		port: 3306,
		user: 'test-user',
		password: 'password',
		database: 'usersBDForCRUD'
	}
};

export const knexInstance = knex(config);