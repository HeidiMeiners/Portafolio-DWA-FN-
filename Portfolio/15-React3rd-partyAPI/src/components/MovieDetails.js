import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Image, Form, Button } from "react-bootstrap";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${id}`).then((res) => {
      setMovie(res.data);
      setComments(res.data.comments);
    });
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.comment.value;

    axios
      .post(`http://localhost:5000/movies/${id}/comments`, { name, comment })
      .then((res) => setComments(res.data.comments));
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      <Image src={movie.poster} fluid />
      <h1>{movie.title}</h1>
      <p>{movie.year}</p>
      <h2>Comments</h2>
      {comments.map((c, index) => (
        <p key={index}>
          <b>{c.name}:</b> {c.comment}
        </p>
      ))}
      <Form onSubmit={addComment}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control type="text" name="comment" required />
        </Form.Group>
        <Button type="submit">Add Comment</Button>
      </Form>
    </Container>
  );
};

export default MovieDetails;
