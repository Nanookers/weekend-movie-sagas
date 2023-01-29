import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Paper, Grid, Typography, CardMedia} from "@material-ui/core";
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        // Fetch all  movies
        dispatch({ type: 'FETCH_MOVIES' });
        // Clear state for the single movie description
        dispatch({ type: 'CLEAR_MOVIE_DESCRIPTION', payload: [] })
    }, []);

    const handlePosterClick = (movie) => {
        history.push(`/details/${movie.id}`)
        
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Grid item sm={2} container spacing={2}  >
                            <div  key={movie.id} onClick={() => handlePosterClick(movie)}  >
                                <h3>{movie.title}</h3>
                                    <Grid item xs="auto">
                                        <Paper elevation={6} >
                                            <CardMedia
                                                component="img"
                                                image={movie.poster}
                                            />
                                            </Paper>
                                    </Grid>   
                                </div>
                        </Grid>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;