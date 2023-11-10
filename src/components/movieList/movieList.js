import React, { useEffect } from 'react';
import './movieList.css';

function MovieList() {
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=174861355dec947c2adef36406c7b3c7")
            .then(response => response.json())
            .then(data => console.log(data));
    }
    )
    return (
        <div>
            <button className="movieInfo">
                <h3 className="movieTitle">Title</h3>

            </button>
            <button className="movieInfo">
                <h3 className="movieTitle">Title</h3>
            </button>
            <button className="movieInfo">
                <h3 className="movieTitle">Title</h3>
            </button>
        </div>
    )
}

export default MovieList;