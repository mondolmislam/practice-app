const { knex } = require('../../middleware');
const { message } = require('../../constants');

const checkInputError = target => Object.keys(target).every(eachElem => target[eachElem] !== '');

module.exports.insert = async (userData) => {
  try {
    if (!checkInputError(userData)) {
      throw new Error(message.inputError);
    }
   let result = knex('Users').insert(userData);
    // TODO: you need to implement inserting method with knex.js
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.listUsers = async ()=> {
  return  knex.select('*').from('Users');
};

// TODO: you need to implement the select command!!
