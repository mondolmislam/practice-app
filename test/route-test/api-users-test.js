const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const Knex = require('knex');

const app = require('../../app');
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`));
chai.use(chaiHttp);

const knexConfig = require('../../database/knexfile');
const knex = Knex(knexConfig);

describe('Server routing', function() {
  describe('#GET /api/users', function () {

  });
});
