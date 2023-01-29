import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, Grid, Typography, CardMedia} from "@material-ui/core";
import './DetailPage.css';
function DetailPage(){

    const dispatch = useDispatch();
    const paramater = useParams();
    let history = useHistory();

    const movieDescription = useSelector (store => store.movieDescription) 

   
    // Params accesses the value in  the route paramaters,
    // and allows me to set a value in the payload based on what page I am on.
    // So instead of fetching the description on the click in movielist,
    // I grab it in useEffect based on route parameters.

    useEffect(() => {
        const movieID = paramater.id;
        
        console.log(movieID);
        dispatch({
            type: 'SAGA_FETCH_MOVIE_DESCRIPTION',
            payload: movieID
        });

    }, [paramater.id]);


    return (
        <>
                {
                    movieDescription.map(( movie,  index ) => {
                        return(
                            <div className="descriptionCard" key={index}>
                                <Grid item xs={10} sm={3} >
                                    <Grid item xs="auto">
                                        <Paper elevation={6} >
                                        <CardMedia
                                            component="img"
                                            sx={{ width: .75 }}
                                            image={movie.poster}
                                        />
                                        </Paper>
                                    </Grid>
                                </Grid> 
                                
                                <Grid item xs={12} sm={6}>
                                    <Typography variant='body1'>{movie.description}</Typography>
                                            <p className="genreText">{movie.genres}</p>
                                            <button onClick={() => history.push('/')}>Back</button>
                                 </Grid>
                        
                                      
                            </div>
                        )
                    })
                }
        </>
    )

}

export default DetailPage;