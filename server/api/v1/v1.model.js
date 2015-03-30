'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  orderId: String,
  companyName: String,
  costumerAddress: String,
  orderedItem: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
