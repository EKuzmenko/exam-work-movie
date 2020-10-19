import React, { useState, useEffect } from 'react';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage (props) {
  let {movieId, setMovieId} = props
  let {movieIdGet, setMovieIdGet} = props

  return (
        <>
        <Menu />
        <SelectedMovieContent 
        movieId={movieId}
        setMovieId={setMovieId}
        movieIdGet={movieIdGet}
        setMovieIdGet={setMovieIdGet}
        />
        </>
    )
  }

export default SelectedMoviePage;
