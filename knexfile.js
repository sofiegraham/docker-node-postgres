require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
    },
    migrations: {
      directory: './database/migrations',
    },
    debug: true,
  },
};
// const postgresUrl = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}`;

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: postgresUrl + '?ssl=true',
//     migrations: {
//       directory: './database/migrations',
//     },
//     debug: true,
//   },
// };

