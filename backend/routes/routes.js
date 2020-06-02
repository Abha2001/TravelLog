const express = require('express');
const Places = require('../models/places');

const travelRouter = express.Router();

travelRouter.route('/').get(async (req, res, next) => {
  try {
    const places = await Places.find();
    res.json(places);
  } catch (error) {
    next(error);
  }
}).post(async (req, res, next) => {
  const place = new Places(req.body);
  try {
    const savedPlace = await place.save();
    res.json(savedPlace);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = travelRouter;
