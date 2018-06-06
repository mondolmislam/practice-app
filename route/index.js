const express = require('express');
const userRouter = require('./user/index');

const router = express.Router();

module.exports = (database) => {
  router.all('/', (req, res) => {
    res.status(200).send('Hello world!');
  });

  router.use('/user', userRouter(database));

  return router;
};
