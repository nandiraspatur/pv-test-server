const getAll = (req, res) => {
  res.send({pwd: 'get'})
};

const add = (req, res) => {
  res.send({pwd: 'add'})
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