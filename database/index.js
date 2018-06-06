const Knex = require('knex');
const knexConfig = require('./knexfile');
const users = require('./users/index');

const knex = Knex(knexConfig);

module.exports = {
  users: users(knex),
};
