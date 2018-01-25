const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingSchema = new Schema({
  fullname: String,
  phone: String,
  email: String,
  amount: Number,
  total: Number,
  date: String,
  event: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;