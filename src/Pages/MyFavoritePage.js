import React, { useState } from 'react';
import MyFavoriteContent from '../Elements/MyFavoriteContent'
import Menu from '../Elements/Menu'

function MyFavoritePage () {
  const [movie, setMovie] = useState([])

    return (
        <>
        <Menu />
        <MyFavoriteContent 
        movie={movie}
        setMovie={setMovie}
        />
        </>
    )
  }

export default MyFavoritePage;
