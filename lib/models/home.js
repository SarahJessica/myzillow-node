'use strict';

var Mongoose = require('mongoose');

var homeSchema = Mongoose.Schema({
  description: {type: String, required: true},
  address: {type: String, required: true},
  photo: {type: String, required: true, default: 'default'},
  price: {type: Number, requied: true},
  name: {type: String, required: true},
  email: {type: String},
  phone: {type: Number},
  lat: {type: Number},
  lng: {type: Number},
  userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true},
  uid: {type: String, required: true}
});

var Home = Mongoose.model('Home', homeSchema);
module.exports = Home;
