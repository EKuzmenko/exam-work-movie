import React, { useState, useEffect } from 'react';
import MainContent from '../Elements/MainContent'
import Menu from '../Elements/Menu'

function MainPage (props) {
    const [page, setPage] = useState(1)
    let {movieId, setMovieId} = props
    let {movieIdGet, setMovieIdGet} = props

    return (
        <>
            <Menu />
            <MainContent 
            page={page}
            setPage={setPage}
            movieId={movieId}
            setMovieId={setMovieId}
            movieIdGet={movieIdGet}
            setMovieIdGet={setMovieIdGet}
            />
        </>
    )
  }

export default MainPage;
