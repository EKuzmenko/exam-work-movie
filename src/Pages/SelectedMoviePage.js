import React from 'react';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage(props) {
  let { movieId, setMovieId, 
        movieEl, setMovieEl,
        list,
        favArr, setFavArr,
        btnBack,
        countModal, setCountModal,
        btnDelFilm, setBtnDelFilm,
        btnAddFilm, setBtnAddFilm
      } = props

  return (
    <>
      <Menu />
      <SelectedMovieContent
        movieId={movieId}
        setMovieId={setMovieId}
        movieEl={movieEl}
        setMovieEl={setMovieEl}
        list={list}
        favArr={favArr}
        setFavArr={setFavArr}
        btnAddFilm={btnAddFilm}
        setBtnAddFilm={setBtnAddFilm}
        btnBack={btnBack}
        countModal={countModal}
        setCountModal={setCountModal}
        btnDelFilm={btnDelFilm}
        setBtnDelFilm={setBtnDelFilm}
      />
    </>
  )
}

export default SelectedMoviePage;
