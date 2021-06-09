const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statisticSchema = new Schema({
  playerId: String,
  level: Number,
  time: Number,
  failCounter: Number,
  isFinished: Boolean
});

const Statistic = mongoose.model('statistic', statisticSchema);

module.exports = Statistic;