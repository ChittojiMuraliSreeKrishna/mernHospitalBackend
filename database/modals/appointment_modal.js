const mongoose = require('mongoose');

const appointment_schema = new mongoose.Schema({
    date: String,
    time: String
});

const appointment_modal = mongoose.model('appointment', appointment_schema);

module.exports = appointment_modal;