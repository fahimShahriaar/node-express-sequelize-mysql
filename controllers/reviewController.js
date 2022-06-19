// requiring console log color
const { color, log } = require("console-log-colors");
const { red, green, cyan } = color;

const db = require("../models");
// Creating models
const Review = db.reviews;

// Create Review
const addReview = async (req, res, next) => {
  try {
    const { rating, description } = req.body;
    const review = await Review.create({ rating, description });
    log.green(review);
    res.status(200).json(review);
  } catch (error) {
    log.red(error);
    res.status(500).json({ error });
  }
};

// Get all reviews
const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.findAll({});
    res.status(200).json(reviews);
  } catch (error) {
    log.red(error);
  }
};

module.exports = {
  addReview,
  getAllReviews,
};
