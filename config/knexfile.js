module.exports.knexConfig = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgresql:localhost:5432/practice',
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
