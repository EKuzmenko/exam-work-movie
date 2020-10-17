import React, { useState, useEffect } from 'react';
import MainContent from '../Elements/MainContent'
import Menu from '../Elements/Menu'

function MainPage (props) {
    const [page, setPage] = useState(1)
    let {movieId, setMovieId} = props

    return (
        <>
            <Menu />
            <MainContent 
            page={page}
            setPage={setPage}
            movieId={movieId}
            setMovieId={setMovieId}
            />
        </>
    )
  }

export default MainPage;
