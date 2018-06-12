const TABLENAME = 'users';

exports.up = knex => knex.schema.createTable(TABLENAME, (table) => {
  // TODO: you need to implement create table feature!
});

exports.down = knex => knex.schema.dropTable(TABLENAME);
