exports.up = knex => (
  knex.batchInsert('users', [{name: 'Sofie'},{name: 'Wilson'}], 1000)
);

exports.down = knex => (
  knex('users').del()
);
