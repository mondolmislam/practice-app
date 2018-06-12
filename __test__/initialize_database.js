const Knex = require('knex');
const knexConfig = require('../database/knexfile');

const knex = Knex(knexConfig);

const clearTable = tableName => knex(tableName).delete();
const handleError = error => console.error(error);

const tablesName = [
  'Users',
];

Promise.all(tablesName.map(eachTable => clearTable(eachTable)))
  .then(() => process.exit())
  .catch(error => handleError(error));
