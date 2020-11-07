import React, { useState, useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import icon_arow_right from '../Img/icon_arow_right.png';
import icon_arow_left from '../Img/icon_arow_left.png';
import {
  Redirect,
  Link
} from "react-router-dom";

const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page='
const api_movie = 'https://api.themoviedb.org/3/movie/';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function SelectedMovieContent(props) {

  let { movieId, setMovieId,
    movieIdGet, setMovieIdGet,
    page, setPage,
    movieEl, setMovieEl,
    list, setList,
    favArr, setFavArr,
    //favArrStor, setFavArrStor,
    btnAddFilm, setBtnAddFilm,
    btnBack, setBtnBack,
    countModal, setCountModal,
    btnDelFilm, setBtnDelFilm
  } = props

  function Next_movie_btn_func(number) {
    setMovieEl(number);
    setMovieId(list[number].id);
  }
  
  /* useEffect(() => {
    if (favArr.map(el => el.id != movieIdGet.id)) {

      setCountModal(0)
    }
    else {
      btnAddFilm = false
      setCountModal(1)
    }
  }, [favArr]) */

  useEffect(() => {
      if (btnAddFilm === true) {
        favArr.push(movieIdGet);
        setFavArr(favArr);
        localStorage.setItem("favArray", JSON.stringify(favArr));
        setBtnAddFilm(false)
        }
  }, [favArr, btnAddFilm])

  useEffect(() => {
    if (btnDelFilm === true) {
      favArr.pop(movieIdGet);
      setFavArr(favArr);
      localStorage.setItem("favArray", JSON.stringify(favArr));
      setBtnDelFilm(false)
      }
}, [favArr, btnDelFilm])


useEffect(()=>{
  favArr.map(el=>(el.id==movieId)?setCountModal(countModal + 1):"")
    },[movieId]
)

useEffect(() => {
    if (JSON.parse(localStorage.getItem("favArray")) === null) {
      localStorage.setItem("favArray", JSON.stringify([]));
    }
    if (favArr.length === 0) {
      setFavArr(JSON.parse(localStorage.getItem("favArray")));
    }
  }, [favArr.length]);

  useEffect(() => {
    fetch(`${api_movie}${movieId}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`)
      .then(res => res.json())
      .then(res => {
        setMovieIdGet(res)
        //;console.log(list[movieEl].id)
      })
      .catch(error => console.error(error))
  }, [movieId])


  if (movieIdGet?.original_title) {
    return (
      <div className="modalWindow container" id="modal_container"
        style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w200/${movieIdGet?.poster_path})` }}>
        <div className="blur">
          <div className="top_buttons col">
            {/* {if (btnBack=false){} :to="/MyFavoritePage"} */}
            <Link to={(btnBack == true) ? "/MyFavoritePage" : "/"}
              onClick={() => `https://api.themoviedb.org/3/movie/${movieIdGet?.id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`}>
              <button><img className="icon_arow_left" src={icon_arow_left} alt="icon_arow_left" />
                  Back to list
                </button>
            </Link>
            <button id="next_movie_btn" disabled={movieEl === (list.length - 1)} onClick={() => { Next_movie_btn_func(movieEl + 1); setCountModal(0)}
            }
            >Next Movie
              <img disabled={movieEl > (list.length - 2)} alt="icon_arow_right" className="icon_arow_right"
                src={icon_arow_right} />
            </button>
          </div>
          <div className="center_content">
            <div className="center_left">
              <div className="div_selected_poster">
                <img className="selected_poster" alt="selected_poster"
                  src={`http://image.tmdb.org/t/p/w200/${movieIdGet?.poster_path}` || DeathStarImg}
                  key={movieIdGet?.id} />
              </div>
            </div>
            <div className="center_right">
              <div className="add_to_fav_botton">
                <button disabled={countModal > 0} className="add_to_fav" onClick={() => { setBtnAddFilm(true); setCountModal(countModal + 1) }} >
                  Add to favorite
                </button>
                <button disabled={countModal < 1} className="del_from_fav" onClick={() => { setBtnDelFilm(true); setCountModal(0) }} >
                  Unfavorite
                </button>
              </div>
              <div className="title_year">
                {movieIdGet?.title} ({movieIdGet?.release_date.substr(0, 4)})
              </div>
              <div className="center_right_center">
                <div className="score">
                  Score: {movieIdGet?.vote_average}
                </div>
                <hr />
                <div className="rating">
                  Rating: {(movieIdGet?.adult === false) ? "R" : "PG"}
                </div>
                <hr />
                <div className="release_date">
                  Release Date: {monthNames[(parseInt(movieIdGet?.release_date.substr(5, 2)) - 1)]} {movieIdGet?.release_date.substr(8, 2)}, {movieIdGet?.release_date.substr(0, 4)}
                </div>
              </div>
              <hr id="disc_hr" />
              <div className="discription">
                <p>{movieIdGet?.overview}</p>
              </div>
              <hr id="disc_hr" />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <Redirect to="/"></Redirect>
      </>
    )
  }
}


export default SelectedMovieContent;
