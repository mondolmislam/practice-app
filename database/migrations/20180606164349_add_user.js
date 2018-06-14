const TABLENAME = 'Users';

exports.up = knex => knex.schema.createTable(TABLENAME, (table) => {
  table.increments();
  table.string('name').notNullable();
  table.string('address').notNullable();
});

exports.down = knex => knex.schema.dropTable(TABLENAME);
