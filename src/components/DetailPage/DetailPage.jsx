import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function DetailPage(){

    const dispatch = useDispatch();
    const params = useParams();
    let history = useHistory();

    const movieDescription = useSelector (store => store.movieDescription) 

   

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