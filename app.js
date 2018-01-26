const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

mongoose.connect('mongodb://vinnixdb:ShadowFax5@cluster0-shard-00-00-b8rmh.mongodb.net:27017,cluster0-shard-00-01-b8rmh.mongodb.net:27017,cluster0-shard-00-02-b8rmh.mongodb.net:27017/pvtest?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

// Routes
const events = require('./routes/events');
const booking = require('./routes/booking');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/events', events);
app.use('/booking', booking);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`)
})