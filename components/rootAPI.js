const express = require('express');
const { usersAPI } = require('./users');

const router = express.Router();

module.exports = (database) => {
  // TODO: you need to implement the response to the '/api' endpoint.

  router.use('/user', usersAPI);

  return router;
};
