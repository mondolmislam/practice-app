const tableName = 'users';

// TODO: you need to add some data.
exports.seed = knex => knex(tableName).del().then(() => knex(tableName).insert([
  {
    name: 'Md. Maidul Islam',
    address: 'Nikunja2, khilket, dhaka, bangladesh'
  },
  {
     name: 'Md. Moshiur Rahman',
    address: 'Nikunja2, khilket, dhaka, bangladesh'
  },
  {
     name: 'Md. Jone',
    address: 'London, England'
  },
]));
