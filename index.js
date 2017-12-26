require('dotenv').config();
const express = require('express');
const db = require('./database/database.js');

const app = express();

app.get('/', (req, res) => {
  res.json('Hello PUPPIES sofie');
});

const PORT = process.env.SERVER_PORT || 8888

app.listen(PORT, console.log(`app now listening on ${PORT}`));

app.get('/testing', (req, res) => {
  res.json('this worked!');
})


app.get('/listtables', (req, res) => {
  return db.knex.schema.raw(`SELECT * FROM information_schema.columns`)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
})

app.get('/adduser', (req, res, next) => {
  return db.knex.schema.raw(`INSERT INTO users (name, gender)
  VALUES ('Jenny', 'female')`)
  .then((data) => {
    res.json(data.rows);
  }).catch((err) => {
    res.status(500).json(err);
  });
})

app.get('/users', (req, res) => {
  return db.knex.schema.raw(`SELECT * FROM users`)
    .then((data) => {
      res.json(data.rows)
    }).catch((err) => {
      res.status(500).json(err);
    });
})

module.exports = app;
