const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const Knex = require('knex');

const app = require('../../app');
const knexConfig = require('../../database/knexfile');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`));
chai.use(chaiHttp);

const knex = Knex(knexConfig);

const seeds = [{
  name: 'test',
  address: 'taipei',
}, {
  name: 'test2',
  address: 'tokyo',
}];

describe('Server routing', function () {
  describe('#POST /api/users', function () {
    let response;

    before(async function () {
      try {
        response = await chai.request(app)
          .post('/api/users').send(seeds);
      } catch (error) {
        throw error;
      }
    });

    it('should return status 201', function () {
      expect(response).to.have.status(201);
    });

    it('should post data', async function () {
      try {
        const responseData = response.body;

        responseData.forEach((eachData, index) => Object.keys(seeds[0]).forEach((eachKey) => {
          expect(eachData[eachKey]).to.equal(seeds[index][eachKey]);
        }));
      } catch (error) {
        throw error;
      }
    });
  });

  describe('#GET /api/users', function () {
    let response;

    context('if data exist', function () {
      before(async function () {
        try {
          response = await chai.request(app).get('/api/users');
        } catch (error) {
          throw error;
        }
      });

      it('should return status 200', function () {
        expect(response).to.have.status(200);
      });

      it('should return data', function () {
        const responseData = response.body;

        responseData.forEach((eachData, index) => Object.keys(seeds[0]).forEach((eachKey) => {
          expect(eachData[eachKey]).to.equal(seeds[index][eachKey]);
        }));
      });
    });

    context('if data does not exist', function () {
      before(async function () {
        try {
          await knex('Users').delete();
          response = await chai.request(app).get('/api/users');
        } catch (error) {
          throw error;
        }
      });

      it('should return status 204', function () {
        expect(response).to.have.status(204);
      });
    });
  });
});
