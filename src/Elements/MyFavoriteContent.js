import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import DeathStarImg from '../Img/DeathStarImg.png';

const api_movie = 'https://api.themoviedb.org/3/movie/';

function MyFavoriteContent(props) {
  const[btnBack, setBtnBack]=useState(false)
  let { favArr, setFavArr,
        movieIdGet, setMovieIdGet,
        movieId, setMovieId,
        movieEl, setMovieEl,
        list, setList
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
          {favArr?.map((el, index)=>
          <div className="fav_film_div" id="fav_film_div">
          <Link to="/SelectedMoviePage" onClick={() => { setMovieId(el.id); setMovieEl(index);setMovieIdGet(el);setBtnBack(true)}}>
            <img className="fav_poster" alt="poster" src={`http://image.tmdb.org/t/p/w200/${el.poster_path}` || DeathStarImg} key={el.id} />
          </Link>
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
