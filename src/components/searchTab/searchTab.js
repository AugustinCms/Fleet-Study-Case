import React from 'react';
import './searchTab.css';
import MovieList from '../movieList/movieList';

function SearchTab() {
  return (
    <div className="searchTab">
      <div className="header">
        <h2>TITLE</h2>
        <input type="text" placeholder="Search..." className="searchBar" />
      </div>
      <br/>
      <div className='movieList'>
        <MovieList />
      </div>
    </div>
  )
}

export default SearchTab;