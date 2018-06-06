const createUsers = require('./createUsers');
const listUsers = require('./listUsers');

class User {
  constructor(userData) {
    this.user = userData;
  }

  seriarize() {
    return {
      userId: this.user.user_id,
      name: this.user.name,
    }
  }
}

module.exports = knex => ({
  createUsers: createUsers(knex),
  listUsers: listUsers(knex, User),
});
