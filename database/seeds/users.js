const tableName = 'users';

exports.seed = knex => knex(tableName).del().then(() => knex(tableName).insert([
  {
    name: 'test',
  },
  {
    name: 'test2',
  },
  {
    name: 'test3',
  },
]));
