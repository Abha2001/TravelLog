const mongoose = require('mongoose');

const placesSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90,
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180,
  },
  name: {
    type: String,
    required: true,
  },
  comment: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  image: String,
  dateOfVisit: {
    type: Date,
    required: true,
  },
},
{
  timestamps: true,
});

const Places = mongoose.model('Places', placesSchema);

module.exports = Places;
