import React, { useState } from 'react';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage(props) {
  let { movieId, setMovieId,
        movieIdGet, setMovieIdGet,
        movieEl, setMovieEl,
        list, setList,
        page, setPage,
        //movArr, setMovArr,
        favArr, setFavArr,
        //favArrStor, setFavArrStor,
        btnAddFilm, setBtnAddFilm,
        btnBack, setBtnBack} = props

  return (
    <>
      <Menu />
      <SelectedMovieContent
        movieId={movieId}
        setMovieId={setMovieId}
        movieIdGet={movieIdGet}
        setMovieIdGet={setMovieIdGet}
        movieEl={movieEl}
        setMovieEl={setMovieEl}
        list={list}
        setList={setList}
        page={page}
        setPage={setPage}
        //movArr={movArr}
        //setMovArr={setMovArr}
        favArr={favArr}
        setFavArr={setFavArr}
        //favArrStor={favArrStor}
        //setFavArrStor={setFavArrStor}
        btnAddFilm={btnAddFilm} 
        setBtnAddFilm={setBtnAddFilm}
        btnBack={btnBack}
        setBtnBack={setBtnBack}
      />
    </>
  )
}

export default SelectedMoviePage;
