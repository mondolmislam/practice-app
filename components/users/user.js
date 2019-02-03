const { camelizeKeys } = require('humps');

const usersDAL = require('./usersDAL');

class User {
  static async insert (userData){
      // Add the user.
      console.log(userData);
      let user = await usersDAL.insert(userData);

      // return the user object
      return user;
  }
  // TODO: you need to implement insert method in User class.
  static async select() {
    try {
      const selectResult = await usersDAL.listUsers();

      return camelizeKeys(selectResult);
    } catch (error) {
      console.error(`class User select error: ${error}`);
      throw error;
    }
  }
}

module.exports.User = User;
