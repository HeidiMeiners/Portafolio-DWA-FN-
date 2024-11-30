import React, { useState } from 'react';

const MovieDetail = ({ movie, comments, addComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(name, comment);
    setName('');
    setComment('');
  };

  return (
    <div className="movie-detail">
      <h2>{movie.best_character.name}</h2>
      <img src={movie.best_character.image} alt={movie.best_character.name} />
      <p>{movie.best_character.bio}</p>

      <h3>Comments</h3>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>
            <strong>{c.name}:</strong> {c.comment}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          value={comment}
          placeholder="Your comment"
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default MovieDetail;
