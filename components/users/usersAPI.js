const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  // TODO: you need to store the data using database!
  const SOMETHING = 'DATABASE ACCESS IS NECESSARY HERE';

  return res.status(201).send(SOMETHING);
});

router.get('/', (req, res) => {
  // TODO: you need to get the data using database!
  // TODO: you need to send the response using express!
});

module.exports.usersAPI = router;
