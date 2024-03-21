import { useState } from 'react';
import './Card.css';

function Card({ title, id, poster, avgRating, displayMovie }) {
    const [clicked, setClicked] = useState('');

    function handleClick(id) {
        setClicked('clicked')
        displayMovie(id)
    }

    return (
        <div className='movie-card' id={id} clicked={clicked} onClick={() => handleClick(id)}>
            <img src={poster} alt={`${title} movie poster`}/>
        </div>
    );
};

export default Card