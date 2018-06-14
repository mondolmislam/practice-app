const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../app');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is starting on PORT ${PORT}`));
chai.use(chaiHttp);

describe('Server routing', function() {
  describe('#ALL method for /api', function() {
    let response;

    before(async function() {
      try {
        response = await chai.request(app).get('/api');
      } catch (error) {
        throw error;
      }
    });

    it('should return status 200', function() {
      expect(response).to.have.status(200);
    });

    it('should return a greeting message', function() {
      expect(response.text).to.equal('Hello, this is /api endpoint');
    });
  });
});
