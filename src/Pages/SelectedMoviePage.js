import React from 'react';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage (props) {
  let {movieId, setMovieId} = props
    
  return (
        <>
        <Menu />
        <SelectedMovieContent 
        movieId={movieId}
        setMovieId={setMovieId}
        />
        </>
    )
  }

export default SelectedMoviePage;
