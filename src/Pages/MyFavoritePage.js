import React, { useState } from 'react';
import MyFavoriteContent from '../Elements/MyFavoriteContent'
import Menu from '../Elements/Menu'

function MyFavoritePage (props) {
  let { favArr, setFavArr,
        movieIdGet, setMovieIdGet,
        movieId, setMovieId,
        //favArrStor, setFavArrStor,
        movieEl, setMovieEl,
        list, setList,
        btnBack, setBtnBack } = props
  
    return (
        <>
        <Menu />
        <MyFavoriteContent 
        favArr={favArr}
        setFavArr={setFavArr}
        movieIdGet={movieIdGet}
        setMovieIdGet={setMovieIdGet}
        movieId={movieId}
        setMovieId={setMovieId}
        //favArrStor={favArrStor}
        //setFavArrStor={setFavArrStor}
        movieEl={movieEl}
        setMovieEl={setMovieEl}
        list={list}
        setList={setList}
        btnBack={btnBack}
        setBtnBack={setBtnBack}
        />
        </>
    )
  }

export default MyFavoritePage;
