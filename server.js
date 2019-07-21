const express = require('express');

const connectDB = require('./config/db');
const { _printLog } = require('./util/scripts');
const serverMiddleware = require('./middleware/serverMiddleware');

const server = express();

connectDB();

serverMiddleware(server);

server.use('/api/auth', require('./routes/api/auth'));
server.use('/api/users', require('./routes/api/users'));

server.get('/', (req, res) => {
  res.send('hello words');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  _printLog(`Server started on port ${PORT}`);
});
