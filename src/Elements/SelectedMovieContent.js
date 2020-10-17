import React, { useState, useEffect } from 'react';

const api_movie = 'https://api.themoviedb.org/3/movie/'

function SelectedMovieContent (props) {
  let {movieId, setMovieId} = props
  
  /* useEffect(() => {
    fetch(`${api_movie}${movieId}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`)
      .then(res => res.json())
      .then(res => setMovieId(res.results))
      .catch(error => console.error(error))
  }, [movieId]) */

    return (
        <>
        Selected Movie
        <p>{movieId}</p>
        </>
    )
  }

export default SelectedMovieContent;
