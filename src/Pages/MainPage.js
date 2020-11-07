import React, { useState } from 'react';
import MainContent from '../Elements/MainContent'
import Menu from '../Elements/Menu'

function MainPage (props) {
    const [totPages, setTotPages] = useState(0)
    let { page, setPage,
          movieId, setMovieId,
          movieIdGet, setMovieIdGet,
          movieEl, setMovieEl,
          list, setList,
          //movArr, setMovArr,
          favArr, setFavArr,
          countModal, setCountModal,
          btnDelFilm, setBtnDelFilm
         } = props

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
            //movArr={movArr}
            //setMovArr={setMovArr}
            favArr={favArr}
            setFavArr={setFavArr}
            countModal={countModal}
            setCountModal={setCountModal}
            btnDelFilm={btnDelFilm}
            setBtnDelFilm={setBtnDelFilm}
            />
        </>
    )
  }

export default MainPage;
