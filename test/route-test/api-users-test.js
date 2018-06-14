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

const database = require('../../database/index');

const seeds = [{
  name: 'test',
  address: 'taipei',
}, {
  name: 'test2',
  address: 'tokyo',
}];

describe('Server routing', function() {
  describe('#POST /api/users', function () {
    let response;

    before(async function() {
      try {
        response = await chai.request(app)
          .post('/api/users').send(seeds);
      } catch (error) {
        throw error;
      }
    });

    it('should return status 201', function() {
      expect(response).to.have.status(201);
    });

    it('should post data', async function() {
      try {
        const databaseResult = await database.users.listUsers();
        
        seeds.forEach((eachSeed, index) => Object.keys(eachSeed).forEach((eachKey) => {
          expect(databaseResult[index][eachKey]).to.equal(eachSeed[eachKey]);
        }));
      } catch (error) {
        throw error;
      }
    });
  });

  describe('#GET /api/users', function() {
    let response;

    context('if data exist', function() {
      before(async function() {
        try {
          response = await chai.request(app).get('/api/users');
        } catch (error) {
          throw error;
        }
      });

      it('should return status 200', function() {
        expect(response).to.have.status(200);
      });

      it('should return data', function() {
        seeds.forEach((eachSeed, index) => Object.keys(eachSeed).forEach((eachKey) => {
          expect(response.body[index][eachKey]).to.equal(eachSeed[eachKey]);
        }));
      });
    });

    context('if data does not exist', function() {
      before(async function() {
        try {
          await knex('Users').delete();
          response = await chai.request(app).get('/api/users');
        } catch (error) {
          throw error;
        }
      });

      it('should return status 204', function() {
        expect(response).to.have.status(204);
      });
    });
  });
});
