'use strict';

var Mongoose = require('mongoose');

var neighborhoodSchema = Mongoose.Schema({
  name: {type: String, required: true},
  geolocation: {
    lat: Number,
    lng: Number,
  },
  userId: {type: Mongoose.Schema.ObjectId, ref: 'User', required: true},
  qty: {type: Number, required: true, default: 0}
});

var Neighborhood = Mongoose.model('Neighborhood', neighborhoodSchema);
module.exports = Neighborhood;
