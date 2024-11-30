import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onShowDetails }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setLikes(likes - 1);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => console.log("Hover detected!")}
    >
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <button onClick={() => onShowDetails(movie)}>More...</button>
        <div className="likes">
          <button onClick={handleLike}>👍</button>
          <span>{likes}</span>
          <button onClick={handleDislike}>👎</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;