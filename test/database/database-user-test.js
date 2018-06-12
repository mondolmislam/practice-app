const { expect } = require('chai');
const Knex = require('knex');

const database = require('../../database/index');
const knexConfig = require('../../database/knexfile');
const messages = require('../../config/messages');

const knex = Knex(knexConfig);

const TABLENAME = 'Users';
const userSeeds = [{
  name: 'test1',
  address: 'taipei',
}, {
  name: 'test2',
  address: 'singapore',
}];

describe('#user', function() {
  describe('#setup', function() {
    it('has run the initial migration', async function() {
      return knex(TABLENAME).select().catch(err => throw err);
    });
  });

  describe('#insert', function() {
    context('if bad params are given', function () {
      it('politely refused', async function () {
        try {
          const result = await database.users.createUsers({
            name: '',
            address: '',
          });


        } catch (error) {
          expect(error.message).to.equal(messages.inputError);
        }
      });
    });

    context('if good params are given', function() {
      afterEach(async function() {
        try {
          await knex(TABLENAME).delete();
        } catch (error) {
          throw error;
        }
      });

      it('successfully insert a data', async function() {
        try {
          const result = await database.users.createUsers(userSeeds);
          
          expect(result.length).to.equal(2);
          userSeeds.forEach((eachUser, index) => Object.keys(eachUser).forEach(eachKey => {
            expect(result[index][eachKey]).to.equal(eachUser[eachKey]);
          }));
        } catch (error) {
          throw error;
        }
      });
    });
  });

  describe('#select', function() {
    before(async function() {
      try {
        const result = knex(TABLENAME).insert(userSeeds).returning('*');
        
        if (result.length !== 2) {
          throw new Error('Inserting two records has some problems.');
        }
      } catch (error) {
        throw error;
      }
    });

    context('if data exist', function() {
      it('you can get data', async function() {
        try {
          const result = await database.users.listUsers();

          expect(result.exist).to.be.true;
          expect(result.data.length).to.equal(2);
          userSeeds.forEach((eachSeed, index) => Object.keys(eachSeed).forEach(eachKey => {
            expect(result.data[index][eachKey]).to.equal(eachSeed[eachKey]);
          }));
        } catch (error) {
          throw error;
        }
      });
    });

    context('if data doesnt exist', function() {
      before(async function() {
        try {
          await knex(TABLENAME).delete();
        } catch (error) {
          throw error;
        }
      });
    
      it('you cannot get data', async function() {
        try {
          const result = await database.users.listUsers();

          expect(result.exist).to.be.false;
          expect(result.data.length).to.equal(0);
        } catch (error) {
          throw error;
        }
      });
    });
  });
});
