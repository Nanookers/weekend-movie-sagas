import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function DetailPage(){

    const dispatch = useDispatch();

    useEffect(() => {
        getMovieDescription()
    })

    // 1. DISPATCH being sent to ROOTSAGA
    const getMovieDescription = () => {
        dispatch({
            type: 'SAGA_FETCH_MOVIE_ DESCRIPTION'
        })
    }

}

export default DetailPage;