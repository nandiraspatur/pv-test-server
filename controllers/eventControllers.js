const Event = require('../models/eventModel');

const getAll = async (req, res) => {
  try {
    let events = await Event.find();
    res.send(events);
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