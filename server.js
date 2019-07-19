const express = require('express');

const connectDB = require('./config/db');
const { _printLog } = require('./config/scripts');

const server = express();

connectDB();

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send('hello words');
});

server.listen(PORT, () => {
  _printLog(`Server started on port ${PORT}`);
});
