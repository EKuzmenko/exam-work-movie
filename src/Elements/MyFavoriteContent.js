import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import DeathStarImg from '../Img/DeathStarImg.png';

const api_movie = 'https://api.themoviedb.org/3/movie/';

function MyFavoriteContent(props) {

  let { favArr, setFavArr,
    movieIdGet, setMovieIdGet,
    movieId, setMovieId,
    movieEl, setMovieEl,
    list, setList,
    btnBack, setBtnBack,
    countModal, setCountModal,
    btnDelFilm, setBtnDelFilm
  } = props

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favArray")) === null) {
      localStorage.setItem("favArray", JSON.stringify([]));
    }
    if (favArr.length === 0) {
      setFavArr(JSON.parse(localStorage.getItem("favArray")));
    }
    setList(favArr);
  }, [favArr.length]);

  if (favArr.length > 0) {
    return (
      <div className="myFavoriteContent">
        <p>My Favorite</p>
        <div className="fav_main_content">
          {favArr?.map((el, index) =>

            <div className="fav_container">
              <div className="fav_film_div" id="fav_film_div">
                <Link to="/SelectedMoviePage" onClick={() => { setMovieId(el.id); setMovieEl(index); setMovieIdGet(el); setBtnBack(true) }}>
                  <img className="fav_poster" alt="poster" src={`http://image.tmdb.org/t/p/w200/${el.poster_path}` || DeathStarImg} key={el.id} />
                </Link>
              </div>
              <div className="fav_center">
                <div className="fav_title">
                  {el.title}
                </div>
                <div className="add_to_fav_botton">
                  <button disabled={countModal < 1} className="del_from_fav" onClick={() => { setBtnDelFilm(true); setCountModal(0) }} >
                    Unfavorite
                </button>
                  </div>
                </div>
              </div>

          )}
        </div>
      </div>
    )
  } else {
    return (
        <>
          Здесь ничего нет (.
        </>
    )
  }
}

export default MyFavoriteContent;
