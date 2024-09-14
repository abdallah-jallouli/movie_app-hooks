// MovieCard.js
import React from 'react';
import StarRating from './StarRating';
import EditMovie from './EditMovie';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie , handleDelete , handleEdit}) => {
  return (
    <div className="movie-card">
      <h4>{movie.name}</h4>
      <img src={movie.image} alt={movie.title} />
      <StarRating rating={movie.rating} />
      <p>{movie.date}</p>
      <div className='deliEdit'>
      <button className='btn' onClick={()=>handleDelete(movie.id)}>Delete</button>
      <EditMovie oldMovie={movie} handleEdit={handleEdit}/>
      <Link to={`/details/${movie.id}`}><button className='btn'>details</button></Link>
      </div>
    </div>
  );
};

export default MovieCard;
