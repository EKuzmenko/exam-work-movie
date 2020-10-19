import React, { useState, useEffect } from 'react';

const api_movie = 'https://api.themoviedb.org/3/movie/'

function SelectedMovieContent (props) {
  let {movieId, setMovieId} = props
  let {movieIdGet, setMovieIdGet} = props

  useEffect(() => {
    fetch(`${api_movie}${movieId}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`)
      .then(res => {res.json()})
      .then(res=> {setMovieIdGet(res.result)})
      .catch(error => console.error(error))
  }, [movieId, movieIdGet])
  
  if (movieIdGet.original_title) {
    return (
        <>
        Name: {movieIdGet.original_title}<br/>
        </>
    )
} else {
    return (
        <>
            Такого фильма нет.
        </>
    )
}
    /* return (
        <>
        Selected Movie
        <p>{movieId}</p>
        <img className="poster" src={movieIdGet?.poster_path}/>
        {movieIdGet?.original_title}
        </>
    ) 
    */
  }

export default SelectedMovieContent;
