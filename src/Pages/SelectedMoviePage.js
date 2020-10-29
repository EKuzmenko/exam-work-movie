import React, { useState } from 'react';
import SelectedMovieContent from '../Elements/SelectedMovieContent'
import Menu from '../Elements/Menu'

function SelectedMoviePage (props) {
  let {movieId, setMovieId} = props
  let {movieIdGet, setMovieIdGet} = props
  let {movieEl, setMovieEl} = props
  let {list, setList} = props
  let { page, setPage } = props
  let {movArr, setMovArr}= props
  let {favArr, setFavArr}=props

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
        movArr={movArr}
        setMovArr={setMovArr}
        favArr={favArr}
        setFavArr={setFavArr}
        />
        </>
    )
  }

export default SelectedMoviePage;
