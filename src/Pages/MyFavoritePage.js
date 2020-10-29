import React, { useState } from 'react';
import MyFavoriteContent from '../Elements/MyFavoriteContent'
import Menu from '../Elements/Menu'

function MyFavoritePage (props) {
  let {favArr, setFavArr}=props
  let {movieIdGet, setMovieIdGet} = props

    return (
        <>
        <Menu />
        <MyFavoriteContent 
        favArr={favArr}
        setFavArr={setFavArr}
        movieIdGet={movieIdGet}
        setMovieIdGet={setMovieIdGet}
        />
        </>
    )
  }

export default MyFavoritePage;
