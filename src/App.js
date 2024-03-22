import { useState, useEffect } from 'react';
import moviesData from './moviesData';
import './App.css';
import Movies from './Movies';
import SingleMovie from './SingleMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState('');
  const [error, setError] = useState('');

  function fetchMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movie')
      .then(response => {
        if(!response.ok) {
          throw new Error('There was an error getting the information')
        }
        return response.json()
      })
      .then(data => setMovies(data.movies))
      .catch(err => setError(err.message))
  }

    useEffect(() => {
      fetchMovies();
    }, []);

  function displayMovie(id) {
    console.log(`displayMovie ${id}`)
  }

  
  return (
    <main className='main'>
      <h1 className='heading'>Rancid Tomatillos</h1>
      { error && <h2 className='error'>{error}</h2> }
      { !selection ? 
      <>
        <h2 className='heading2'>Top Movies Now...</h2>
        <Movies movies={movies} setSelection={setSelection} displayMovie={displayMovie} setError={setError}/>
      </>
      :
      <SingleMovie selection={selection} setSelection={setSelection} /> }
    </main>
    
  );
};

export default App;
