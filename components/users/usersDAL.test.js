// This test is meant for testing user.js and User.js

const { knex } = require('../../middleware');
const { message } = require('../../constants');
const User = require('./user');

const TABLENAME = 'Users';
const userSeeds = [{
  name: 'test1',
  address: 'taipei',
}, {
  name: 'test2',
  address: 'singapore',
}];

const forcePromiseReject = () => {
  throw new Error('The test case should causes error, but did not.');
};

describe('#user', () => {
  describe('#setup', () => {
    it('has run the initial migration',
      async () => knex(TABLENAME).select().catch(err => console.error(err)));
  });

  describe('#insert', () => {
    describe('if bad params are given', () => {
      it('politely refused', async () => {
        try {
          await User.insert({
            name: '',
            address: '',
          });

          forcePromiseReject();
        } catch (error) {
          expect(error.message).toBe(message.inputError);
        }
      });
    });

    describe('if good params are given', () => {
      afterEach(async () => {
        try {
          await knex(TABLENAME).delete();
        } catch (error) {
          throw error;
        }
      });

      it('successfully insert a data', async () => {
        try {
          const result = await User.insert(userSeeds);

          expect(result.length).toBe(2);
          userSeeds.forEach((eachUser, index) => Object.keys(eachUser).forEach((eachKey) => {
            expect(result[index][eachKey]).to.equal(eachUser[eachKey]);
          }));
        } catch (error) {
          throw error;
        }
      });
    });
  });

  describe('#select', () => {
    beforeAll(async () => {
      try {
        const result = await knex(TABLENAME).insert(userSeeds).returning('*');

        if (result.length !== 2) {
          throw new Error('Inserting two records has some problems.');
        }
      } catch (error) {
        throw error;
      }
    });

    describe('if data exist', () => {
      it('you can get data', async () => {
        try {
          const result = await User.listUsers();

          expect(result.exist).toBe(true);
          expect(result.data.length).toBe(2);
          userSeeds.forEach((eachSeed, index) => Object.keys(eachSeed).forEach((eachKey) => {
            expect(result.data[index][eachKey]).to.equal(eachSeed[eachKey]);
          }));
        } catch (error) {
          throw error;
        }
      });
    });

    describe('if data doesnt exist', () => {
      beforeAll(async () => {
        try {
          await knex(TABLENAME).delete();
        } catch (error) {
          throw error;
        }
      });

      it('you cannot get data', async () => {
        try {
          const result = await User.listUsers();

          expect(result.exist).toBe(false);
          expect(result.data.length).to.equal(0);
        } catch (error) {
          throw error;
        }
      });
    });
  });
});
