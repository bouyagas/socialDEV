const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const compression = require('compression');

module.exports = server => {
  server.use(helmet());
  server.use(logger('dev'));
  server.use(compression());
  server.use(express.json({ extended: false }));
};
