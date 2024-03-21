import './Movies.css';
import Card from './Card';

function Movies({ movies, displayMovie, setSelection }) {
    const movieCards = 
    movies.map(movie => {
        return (
            <Card
                title={movie.title}
                avgRating={movie.average_rating}
                poster={movie.poster_path}
                id={movie.id}
                key={movie.id}
                displayMovie={displayMovie}
                setSelection={setSelection}
            />
        )
    });

    return (
        <section className='movies'>
            {movieCards}
        </section>
    );
};

export default Movies