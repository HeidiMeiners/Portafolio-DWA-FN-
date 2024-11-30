import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={movie.poster} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.year}</Card.Text>
      <Link to={`/movies/${movie._id}`}>
        <Button variant="primary">More...</Button>
      </Link>
    </Card.Body>
  </Card>
);

export default MovieCard;