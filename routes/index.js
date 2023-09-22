const router = require('express').Router();
const bookings = require('../routes/booking');
const appointments = require('../routes/appointment');
const login = require('../routes/login')

bookings(router);
appointments(router);
login(router);

module.exports = router;