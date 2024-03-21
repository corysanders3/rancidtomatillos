import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';

function App() {
  const [movies, setMovies] = useState(moviesData.movies);
  const [selectionMade, setSelectionMade] = useState('');
  // console.log({selectionMade})

  function displayMovie(id) {
    console.log(`displayMovie ${id}`)
  }
  
  if (!selectionMade) {
    return (
      <main className='main'>
        <h1 className='heading'>Rancid Tomatillos</h1>
        <Movies movies={movies} displayMovie={displayMovie} setSelectionMade={setSelectionMade}/>
      </main>
    );
  } else {
    return (
      <h2>You'll display {selectionMade}</h2>
    )
  }
};

export default App;
