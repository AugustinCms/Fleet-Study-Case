import React, { useEffect, useState } from "react";
import "./movieList.css";

function MovieList({ setSelectedMovie, searchTerm, setCurrentPage, setTotalPages, currentPage }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);



  useEffect(() => {
    const searchMovies = (term, page = 1) => {
      const url =
        "https://api.themoviedb.org/3/search/movie?query=" +
        term +
        "&page=" +
        page +
        "&include_adult=false&language=en-US&";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_MOVIE_DB_ACCESS_TOKEN,
        },
      };
      console.log("searching movies");
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
          setCurrentPage(data.page);
          setTotalPages(data.total_pages);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError(error.toString());
        });
    };
    if (searchTerm) {
      console.log(currentPage);
      searchMovies(searchTerm, currentPage);
    }
  }, [searchTerm, currentPage, setCurrentPage, setTotalPages]);

  return (
    <div className="movieList">
      {error ? <div>Error: {error}</div> : null}
      {movies.map((movie, index) => (
        <button key={index} className="movieInfo" onClick={() => setSelectedMovie(movie)}>
          <h3 className="movieTitle">{movie.title}</h3>
        </button>
      ))}
    </div>
  );
}

export default MovieList;
