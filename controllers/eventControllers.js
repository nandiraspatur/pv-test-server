const Event = require('../models/eventModel');

const getAll = async (req, res) => {
  try {
    let events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  };
};

const getOne = async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  };
};

const add = async (req, res) => {
  try {
    let addEvent = await Event.create(req.body);
    res.send(addEvent);
  } catch (error) {
    res.status(500).send(error);
  };
};

module.exports = {
  getAll,
  getOne,
  add
}