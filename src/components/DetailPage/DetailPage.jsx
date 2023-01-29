import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
                            <div key={index}>
                                <img src={movie.poster}/>
                                <p>{movie.description}</p>
                                <p>{movie.genres}</p>
                                <button onClick={() => history.push('/')}>Back</button>
                            </div>
                        )
                    })
                }
        </>
    )

}

export default DetailPage;