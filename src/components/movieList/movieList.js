import React, { useEffect, useState } from "react";
import "./movieList.css";

function MovieList({ searchTerm }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = (term) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      term +
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
      .then((data) => setMovies(data.results))
      .catch((error) => {
        console.error("Error:", error);
        setError(error.toString());
      });
  };

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div>
      {error ? <div>Error: {error}</div> : null}
      {movies.map((movie, index) => (
        <button key={index} className="movieInfo">
          <h3 className="movieTitle">{movie.title}</h3>
        </button>
      ))}
    </div>
  );
}

export default MovieList;
