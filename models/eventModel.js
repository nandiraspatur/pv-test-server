const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  name: String,
  location: String,
  price: Number,
  description: String,
  urlImage: String
});

const Event = mongoose.model('Event', eventSchema)

module.exports = Event