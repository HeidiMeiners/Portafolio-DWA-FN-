const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/moviesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  poster: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  comments: [{ name: String, comment: String }],
});

const Movie = mongoose.model("Movie", movieSchema);

const movies = [
  {
    title: "The Empire Strikes Back",
    year: 1980,
    poster: "SW5-The_empire_strikes_back.jpg",
    likes: 0,
    dislikes: 0,
    comments: [],
  },
  {
    title: "The Return of the Jedi",
    year: 1983,
    poster: "SW6-The_return_of_the_jedi.jpg",
    likes: 0,
    dislikes: 0,
    comments: [],
  },
];

Movie.insertMany(movies).then(() => {
  console.log("Movies added successfully");
  mongoose.connection.close();
});
