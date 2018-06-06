module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgresql:localhost:5432/regionalcare',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'migrations',
  },
  seeds: {
    directory: './seeds/',
  },
};
