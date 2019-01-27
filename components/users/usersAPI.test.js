const request = require('supertest');

const { knex } = require('../../middleware');
const app = require('../../app');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`));

const seeds = [{
  name: 'test',
  address: 'taipei',
}, {
  name: 'test2',
  address: 'tokyo',
}];

describe('Server routing', () => {
  describe('#POST /api/users', () => {
    let response;

    beforeAll(async () => {
      try {
        response = await request(app)
          .post('/api/users').send(seeds);
      } catch (error) {
        throw error;
      }
    });

    it('should return status 201', () => {
      expect(response.status).toBe(201);
    });

    it('should post data', async () => {
      try {
        const responseData = response.body;

        expect(responseData).toMatchObject(seeds);
      } catch (error) {
        throw error;
      }
    });
  });

  describe('#GET /api/users', () => {
    let response;

    describe('if data exist', () => {
      beforeAll(async () => {
        try {
          response = await request(app).get('/api/users');
        } catch (error) {
          throw error;
        }
      });

      it('should return status 200', () => {
        expect(response.status).toBe(200);
      });

      it('should return data', () => {
        const responseData = response.body;

        expect(responseData).toMatchObject(seeds);
      });
    });

    describe('if data does not exist', () => {
      beforeAll(async () => {
        try {
          await knex('users').delete();
          response = await request(app).get('/api/users');
        } catch (error) {
          throw error;
        }
      });

      it('should return status 204', () => {
        expect(response.status).toBe(204);
      });
    });
  });
});
