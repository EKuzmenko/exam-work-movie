import React from 'react';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage (props) {
  let {movieId, setMovieId} = props
  let {movieIdGet, setMovieIdGet} = props
  let {movieEl, setMovieEl} = props
  let {list, setList} = props

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
        setList={setList}/>
        </>
    )
  }

export default SelectedMoviePage;
