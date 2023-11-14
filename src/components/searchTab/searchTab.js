// SearchTab.js
import React, { useState } from 'react';
import './searchTab.css';
import MovieList from '../movieList/movieList';

function SearchTab({ setSelectedMovie }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleEnterPress = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
      <MovieList setSelectedMovie={setSelectedMovie} searchTerm={searchTerm} setCurrentPage={setCurrentPage} setTotalPages={setTotalPages} currentPage={currentPage}/>
      <div className="footer">
      <button onClick={handlePrevPage}>Previous Page</button>
        <p>{currentPage}/{totalPages}</p>
        <button onClick={handleNextPage}>Next Page</button>
        </div>
    </div>
  )
}

export default SearchTab;