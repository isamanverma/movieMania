const mongoose = require("mongoose");
const FavouriteSchema = new mongoose.Schema({
  movieId: { type: Number, required: true },
  title: { type: String, required: true },
  backdrop_path: String,
  release_date: String,
  original_language: String,
  overview: String,
  poster_path: String,
  vote_average: Number,
  vote_count: Number,
  popularity: Number,
  status: String,
  label: String,
  value: String,
  subtext: String,
});

module.exports = mongoose.model("Favourite", FavouriteSchema);