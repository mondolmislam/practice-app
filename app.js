const express = require('express');
const bodyParser = require('body-parser');

const router = require('./route/index');

const app = express();
app.use(bodyParser.json());
app.use('/api', router);

// TODO: you need to implement server routing!!

module.exports = app;
