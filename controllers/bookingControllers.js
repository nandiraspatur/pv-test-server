const Booking = require('../models/bookingModel');

const getAll = async (req, res) => {
  try {
    let booking = await Booking.find().populate('event');
    res.send(booking);
  } catch (error) {
    res.status(500).send(error);
  };
};

const add = async (req, res) => {
  try {
    let addBooking = await Booking.create(req.body);
    res.send(addBooking);
  } catch (error) {
    res.status(500).send(error);
  };
};

module.exports = {
  getAll,
  add
}