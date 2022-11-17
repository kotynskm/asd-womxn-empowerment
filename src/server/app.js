// we will use express for route handling, error handling, database integration etc..
const express = require('express');
const morgan = require('morgan');

// create an instance of the app object in express
const app = express();

// middleware
app.use(morgan('dev'));

// to parse data
// app.use(express.urlencoded({ extended: true }));

// export app
module.exports = app;