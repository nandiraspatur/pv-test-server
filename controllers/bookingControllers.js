const Booking = require('../models/bookingModel');

const getAll = async (req, res) => {
  try {
    let booking = await Booking.find();
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

const update = (req, res) => {
  res.send({pwd: 'update'})
};

const remove = (req, res) => {
  res.send({pwd: 'delete'})
};

module.exports = {
  getAll,
  add,
  update,
  remove
}