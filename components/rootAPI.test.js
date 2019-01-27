const request = require('supertest');

const app = require('../app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`));

describe('Server routing', () => {
  describe('#ALL method for /api', () => {
    let response;

    beforeAll(async () => {
      try {
        response = await request(app).get('/api');
      } catch (error) {
        throw error;
      }
    });

    it('should return status 200', () => {
      expect(response.status).toBe(200);
    });

    it('should return a greeting message', () => {
      expect(response.text).toBe('Hello, this is /api endpoint');
    });
  });
});
