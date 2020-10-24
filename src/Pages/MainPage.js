import React, { useState } from 'react';
import MainContent from '../Elements/MainContent'
import Menu from '../Elements/Menu'

function MainPage (props) {
    const [page, setPage] = useState(1)
    const [totPages, setTotPages] = useState(0)
    let {movieId, setMovieId} = props
    let {movieIdGet, setMovieIdGet} = props
    let {movieEl, setMovieEl} = props
    let {list, setList} = props

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
            totPages={totPages}
            setTotPages={setTotPages}
            movieEl={movieEl}
            setMovieEl={setMovieEl}
            list={list}
            setList={setList}
            />
        </>
    )
  }

export default MainPage;
