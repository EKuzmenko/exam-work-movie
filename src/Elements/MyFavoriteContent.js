import React, { useState, useEffect } from 'react';

const api_movie = 'https://api.themoviedb.org/3/movie/';

function MyFavoriteContent(props) {
  let { favArr, setFavArr } = props
  let { movieIdGet, setMovieIdGet } = props

  /* useEffect(() => {
    fetch(`${api_movie}${favArr}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`)
      .then(res => res.json())
      .then(res => {
        setMovieIdGet(res);
        console.log(res)
      })
      .catch(error => console.error(error))
  }, [favArr]) */

  return (
    <div className="myFavoriteContent">
      <p>My Favorite</p>
    </div>
  )
}

export default MyFavoriteContent;
