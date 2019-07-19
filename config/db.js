const mongoose = require('mongoose');
const config = require('config');

const { _printLog, _printErr } = require('./scripts');

const db = config.get('mongoURL');

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    _printLog('Mongo Connected ...');
  } catch (error) {
    _printErr(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
