const Knex = require('knex');
const { knexConfig } = require('../config');

module.exports.knex = Knex(knexConfig);
