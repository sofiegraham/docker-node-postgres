exports.up = knex => (
  knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('gender').defaultTo('non binary');
      table.timestamps(true, true);
    })
);

exports.down = knex => (
  knex.schema
    .dropTable('users')
);
