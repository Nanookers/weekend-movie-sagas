import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function DetailPage(){

    const dispatch = useDispatch();
    const movieDescription = useSelector (store => store.movieDescription) 

    useEffect(() => {
        getMovieDescription()
    })

    console.log(movieDescription);

    // 1. DISPATCH being sent to ROOTSAGA
    const getMovieDescription = () => {
        dispatch({
            type: 'SAGA_FETCH_MOVIE_ DESCRIPTION',
            payload: `1`
        })
    }

    return (
        <h1>Hi</h1>
    )

}

export default DetailPage;