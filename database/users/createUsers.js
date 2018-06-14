const messages = require('../../config/messages');

const checkInputError = params => Object.keys(params).every(eachElem => params[eachElem] !== '');

module.exports = (knex, TABLENAME) => async (params) => {
  try {
    if (!checkInputError(params)) {
      throw new Error(messages.inputError);
    }

    const result = await knex(TABLENAME).insert(params).returning('*');
    return result;
  } catch (error) {
    throw error;
  }
};
