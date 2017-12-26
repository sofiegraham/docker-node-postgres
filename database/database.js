require('dotenv').config;


const knex = require('knex')({
  client: 'pg',
  connection: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
  }
});

// const postgresUrl = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}`;

// const knex = require('knex')({
//   client: 'pg',
//   connection: postgresUrl + '?ssl=true',
// });



const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = { bookshelf, knex };
