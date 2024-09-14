// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, handleDelete , handleEdit }) => {
  return (
    <div className="movie-list">
      {React.Children.toArray(movies.map((movie) => (
        <MovieCard  movie={movie}  handleDelete={handleDelete} handleEdit={handleEdit}/>
      )))}
    
    </div>
  );
};

export default MovieList;
