const mongoose = require('mongoose');
const config = require('config');

const { _printLog, _printErr } = require('../util/scripts');

const db = config.get('mongoURL');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    _printLog('Mongo Connected ...');
  } catch (err) {
    _printErr(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
