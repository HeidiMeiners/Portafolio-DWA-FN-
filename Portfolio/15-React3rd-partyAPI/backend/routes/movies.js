const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

// Obtener todas las películas
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// Dar like a una película
router.post("/:id/like", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
  res.json(movie);
});

// Dar dislike a una película
router.post("/:id/dislike", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } }, { new: true });
  res.json(movie);
});

// Agregar un comentario
router.post("/:id/comments", async (req, res) => {
  const { name, comment } = req.body;
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: { name, comment } } },
    { new: true }
  );
  res.json(movie);
});

module.exports = router;