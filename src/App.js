import './App.css';
import React, { useState } from 'react';
import MovieList from './components/movieList/movieList';
import SearchTab from './components/searchTab/searchTab';
import MovieDetail from './components/movieDetail/movieDetail';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SearchTab setSelectedMovie={setSelectedMovie}/>
          {selectedMovie && <MovieDetail movie={selectedMovie} />}
        </div>
      </header>
    </div>
  );
}

export default App;
