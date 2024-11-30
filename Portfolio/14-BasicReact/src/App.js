import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import data from "./data";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleShowDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Star Wars Movies</h1>
      <div className="movie-grid">
        {data.map((movie) => (
          <MovieCard key={movie.episode} movie={movie} onShowDetails={handleShowDetails} />
        ))}
      </div>
      {selectedMovie && (
        <div className="movie-details">
          <h2>{selectedMovie.best_character.name}</h2>
          <img src={selectedMovie.best_character.image} alt={selectedMovie.best_character.name} />
          <p>{selectedMovie.best_character.bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;