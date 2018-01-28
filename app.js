const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
 
mongoose.connect(process.env.MONGODB);

const index = require('./routes/index');
const events = require('./routes/events');
const booking = require('./routes/booking');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', index);
app.use('/events', events);
app.use('/booking', booking);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`)
})