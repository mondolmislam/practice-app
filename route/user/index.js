const express = require('express');

module.exports = (database) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    const postData = req.body;

    // TODO: you need to store the data using database!

    res.status(201).end();
  });

  router.get('/', (req, res) => {
    // TODO: you need to get the data using database!
    // TODO: you need to send the response using express!
  });
};
