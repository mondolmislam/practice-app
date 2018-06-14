const createUsers = require('./createUsers');
const listUsers = require('./listUsers');

const TABLENAME = 'Users';
class User {
  constructor(userData) {
    this.user = userData;
  }

  seriarize() {
    return {
      userId: this.user.user_id,
      name: this.user.name,
    };
  }
}

module.exports = knex => ({
  createUsers: createUsers(knex, TABLENAME),
  listUsers: listUsers(knex, User, TABLENAME),
});
