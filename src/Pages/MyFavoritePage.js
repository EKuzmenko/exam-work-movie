import React from 'react';
import MyFavoriteContent from '../Elements/MyFavoriteContent'
import Menu from '../Elements/Menu'

function MyFavoritePage(props) {
  let { favArr, setFavArr,
        setMovieId,
        setMovieEl,
        setList,
        setBtnBack,
        countModal, setCountModal,
        setBtnDelFilm,
        btnDelFilm,
        list,
        movieEl
      } = props

  return (
    <>
      <Menu />
      <MyFavoriteContent
        favArr={favArr}
        setFavArr={setFavArr}
        setMovieId={setMovieId}
        setMovieEl={setMovieEl}
        setList={setList}
        setBtnBack={setBtnBack}
        countModal={countModal}
        setCountModal={setCountModal}
        setBtnDelFilm={setBtnDelFilm}
        btnDelFilm={btnDelFilm}
        list={list}
        movieEl={movieEl}
        />
    </>
  )
}

export default MyFavoritePage;
