
export const up = function (knex: import("knex").Knex): Promise<void> {
	return knex.schema.createTable('users_knex', (table) => {
		table.increments('_id');
		table.string('login').notNullable();
		table.string('email').notNullable();
		table.string('password').notNullable();
	})
};


export const down = function (knex: import("knex").Knex): Promise<void> {
	return knex.schema.dropTable('users_knex')
};
