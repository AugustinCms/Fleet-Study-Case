import React, { useEffect, useState } from "react";
import "./movieDetail.css";

function MovieDetail({ movie }) {
  const [genres, setGenres] = useState([]);
  const image_base_url = "https://image.tmdb.org/t/p/w300";
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ4NjEzNTVkZWM5NDdjMmFkZWYzNjQwNmM3YjNjNyIsInN1YiI6IjY1NDU5MGI1Mjg2NmZhMDExYmNlYTAyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.64KI4cvfMsDWYT8toFTD5LE6aBSJ8Nkdg80hWprFmYA",
    },
  };

  function genreIdToString(id) {
    return id.map((genre) => {
      if (movie.genre_ids.includes(genre.id)) {
        return genre.name;
      }
    }).filter((genre) => genre !== undefined);
  }

  useEffect(() => {
    console.log(movie);
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setGenres(genreIdToString(res.genres)));

  }, [movie]);
  return (
    <div className="movieDetail">
      <div className="movieHeader">
        <div className="movieMainInfo">
          <h2 className="title">{movie.title}</h2>
          <h3 className="movieGenre">{genres.join(', ')}</h3>
        </div>
        <img
          className="movieImage"
          src={image_base_url + movie.poster_path}
          alt="movie poster"
        />
      </div>
      <p className="movieDescription">{movie.overview}</p>
    </div>
  );
}

export default MovieDetail;
