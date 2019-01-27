const TABLENAME = 'Users';

exports.up = knex => knex.schema.createTable(TABLENAME, (table) => {
  table.increments();
  table.string('name').notNullable();
  table.string('address').notNullable();
  // TODO: you need to add created_at column
  // which should be set the time when the column inserted automatically.
});

exports.down = knex => knex.schema.dropTable(TABLENAME);
