import React, { useState, useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import icon_arow_right from '../Img/icon_arow_right.png';
import icon_arow_left from '../Img/icon_arow_left.png';
import {
  Link
} from "react-router-dom";

const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page='
const api_movie = 'https://api.themoviedb.org/3/movie/';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function SelectedMovieContent(props) {
  let { movieId, setMovieId } = props
  let { movieIdGet, setMovieIdGet } = props
  let { page, setPage } = props
  let { movieEl, setMovieEl } = props
  let { list, setList } = props
  let { movArr, setMovArr } = props
  let { favArr, setFavArr } = props

  useEffect(() => {
    fetch(`${api_movie}${movieId}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`)
      .then(res => res.json())
      .then(res => setMovieIdGet(res))
      .catch(error => console.error(error))
  }, [movieId])

  if (movieIdGet?.original_title) {
    return (
      <div className="modalWindow container" id="modal_container"
        style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w200/${movieIdGet?.poster_path})` }}>
        <div className="blur">
          <div className="top_buttons col">
            <Link to="/"
              onClick={() => `https://api.themoviedb.org/3/movie/${movieIdGet?.id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`}>
              <button><img className="icon_arow_left" src={icon_arow_left} />
                  Back to list
                </button>
            </Link>
            <button id="next_movie_btn" disabled={movieEl > 19} onClick={() => {
              setMovieEl(movieEl + 1);
              setMovieId(movArr.results[movieEl].id)
            }}
            >Next Movie
              <img disabled={movieEl > 19} className="icon_arow_right"
                src={icon_arow_right} />
            </button>
          </div>
          <div className="center_content">
            <div className="center_left">
              <div className="div_selected_poster">
                <img className="selected_poster"
                  src={`http://image.tmdb.org/t/p/w200/${movieIdGet?.poster_path}` || DeathStarImg}
                  key={movieIdGet?.id} />
              </div>
            </div>
            <div className="center_right">
              <div className="add_to_fav_botton">
                <button className="add_to_fav" onClick={() =>setFavArr(favArr.concat(Array.of(movieId)))} >
                  Add to favorite
                </button>
              </div>
              <div className="title_year">
                {movieIdGet?.original_title} ({movieIdGet?.release_date.substr(0, 4)})
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
                  Release Date: {monthNames[(parseInt(movieIdGet?.release_date.substr(5, 2)) - 1)]}
                  {movieIdGet?.release_date.substr(8, 2)}, {movieIdGet?.release_date.substr(0, 4)}
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
        Такого фильма нет.
      </>
    )
  }
}


export default SelectedMovieContent;
