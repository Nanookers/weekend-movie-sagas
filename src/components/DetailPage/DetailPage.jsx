import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function DetailPage(){

    const dispatch = useDispatch();

    const movieDescription = useSelector (store => store.movieDescription) 

    const params = useParams();

    console.log(movieDescription);

    useEffect(() => {
        const movieID = params.id;
        console.log(movieID);
        dispatch({
            type: 'SAGA_FETCH_MOVIE_DESCRIPTION',
            payload: movieID
        });

    }, [params.id]);

    return (
        <>
            {
                movieDescription.map(( movie,  index ) => {
                    return(
                        <div key={index}>
                            <img src={movie.poster}/>
                            <p>{movie.description}</p>
                        </div>
                    )
                })
            }
        </>
    )

}

export default DetailPage;