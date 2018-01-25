const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('morgan');

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