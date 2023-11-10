// SearchTab.js
import React, { useState } from 'react';
import './searchTab.css';
import MovieList from '../movieList/movieList';

function SearchTab({ setSelectedMovie }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleEnterPress = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchTab">
      <div className="header">
        <h2>Search a movie</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          className="searchBar" 
          onChange={handleEnterPress}
        />
      </div>
      <br/>
      <MovieList setSelectedMovie={setSelectedMovie} searchTerm={searchTerm} />
    </div>
  )
}

export default SearchTab;