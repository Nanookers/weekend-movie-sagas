import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'CLEAR_MOVIE_DESCRIPTION', payload: [] })
    }, []);

    const handlePosterClick = (movie) => {
        history.push(`/details/${movie.id}`)
        // history.push(`/details`)
        
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div  key={movie.id} onClick={() => handlePosterClick(movie)}  >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;