// import "./App.css";
import React, { useState } from "react";
import MovieList from "./MovieList";
// import { moviesData } from "./data";
import AddNewMovie from "./AddNewMovie";
import Filter from "./Filter";


const Home = ({data}) => {
  const [movies, setMovies] = useState(data);
  const [textFilter, setTextFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(1);
  const handleTextFilter = (text) => setTextFilter(text);
  const handleRatingFilter = (rate) => setRatingFilter(rate);

  const handleAdd = (movie) => setMovies([...movies, movie]);
  const handleDelete = (id) =>
    setMovies(movies.filter((movie) => movie.id !== id));
  const handleEdit = (editedmovie) =>
    setMovies(
      movies.map((el) => (el.id === editedmovie.id ? editedmovie : el))
    );
  return (
    <div>
      <Filter
        handleRatingFilter={handleRatingFilter}
        handleTextFilter={handleTextFilter}
        textFilter={textFilter}
        ratingFilter={ratingFilter}
      />
      <MovieList
        movies={movies.filter(
          (el) =>
            el.name.toLowerCase().includes(textFilter.toLowerCase()) &&
            el.rating >= ratingFilter
        )}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <AddNewMovie handleAdd={handleAdd} />
    </div>
  );
};

export default Home;
