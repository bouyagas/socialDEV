const express = require('express');
const { _print } = require('./config/scripts');

const server = express();

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send('hello words');
});

server.listen(PORT, () => {
  _print(`Server started on port ${PORT}`);
});
