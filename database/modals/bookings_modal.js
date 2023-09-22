const mongoose = require('mongoose');

const booking_schema  = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: String,
    type: String,
    address: String,
    timeStamp: String,
    consultantDoctor: String,
    consulteeId: String,
});

const booking_modal = mongoose.model('consultee', booking_schema);

module.exports = booking_modal