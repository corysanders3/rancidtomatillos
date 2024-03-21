import { useState } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';

function App() {
  const [movies, setMovies] = useState(moviesData.movies);
  const [selection, setSelection] = useState('');
  // console.log({selectionMade})

  function displayMovie(id) {
    console.log(`displayMovie ${id}`)
  }
  //rewrite this with with ternary
  if (!selection) {
    return (
      <main className='main'>
        <h1 className='heading'>Rancid Tomatillos</h1>
        <Movies movies={movies} displayMovie={displayMovie} setSelection={setSelection}/>
      </main>
    );
  } else {
    return (
      <h2>You'll display {selection}</h2>
      //this will be where we render the single movie display
      //movie display close click will need to reset selection state and clicked state to empty strings
    )
  }
};

export default App;
