const mongoose = require('mongoose');

const admin_schema  = new mongoose.Schema({
   userName: String,
   password: String
});

const admin_modal = mongoose.model('user', admin_schema);

module.exports = admin_modal