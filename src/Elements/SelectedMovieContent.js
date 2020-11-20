import React, { useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import star from '../Img/star.png';
import star_unf from '../Img/star_unf.png';
import icon_arow_right from '../Img/icon_arow_right.png';
import icon_arow_left from '../Img/icon_arow_left.png';
import {
  Redirect,
  Link
} from "react-router-dom";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function SelectedMovieContent(props) {

  let { movieId, setMovieId,
    movieEl, setMovieEl,
    list,
    favArr, setFavArr,
    btnBack,
    countModal, setCountModal,
    btnDelFilm, setBtnDelFilm,
    btnAddFilm, setBtnAddFilm,
  } = props

  useEffect(() => {
    for (let i = 0; i < favArr.length; i++) {
      if (movieId === favArr[i].id) {
        setCountModal(countModal = 1)
      }
    }
  }, [movieId, favArr, countModal]
  )

  function Next_movie_btn_func(number) {
    setMovieEl(number);
    setMovieId(list[number].id);
  }

  useEffect(() => {
    if (btnAddFilm === true) {
      favArr.push(list[movieEl]);
      setFavArr(favArr);
      localStorage.setItem("favArray", JSON.stringify(favArr));
      setBtnAddFilm(false)
      setCountModal(countModal = 1)
    }
  }, [favArr, btnAddFilm])

  useEffect(() => {
    if (btnDelFilm === true) {
      favArr.pop(list[movieEl]);
      setFavArr(favArr);
      localStorage.setItem("favArray", JSON.stringify(favArr));
      setBtnDelFilm(false);
      setCountModal(countModal = 0)
    }
  }, [favArr, btnDelFilm, countModal])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favArray")) == null) {
      localStorage.setItem("favArray", JSON.stringify([]));
    }
    if (favArr.length === 0) {
      setFavArr(JSON.parse(localStorage.getItem("favArray")));
    }
  }, [favArr.length]);

  if (list[movieEl]?.title) {
    return (
      <div className="modalWindow container" id="modal_container"
        style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w200/${list[movieEl]?.poster_path})` }}>
        <div className="blur">
          <div className="main_block">
            <div className="top_buttons col">
              <Link to={(btnBack === true) ? "/MyFavoritePage" : "/"}
                onClick={() => `https://api.themoviedb.org/3/movie/${list[movieEl]?.id}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`}>
                <button className="btn_back_to_list"><img className="icon_arow_left" src={icon_arow_left} alt="icon_arow_left" />
                  Back to list
                </button>
                <button className="btn_back_to_list_mini"><img className="icon_arow_left_mini" src={icon_arow_left} alt="icon_arow_left" />
                  Back
                </button>
              </Link>
              <button className="next_movie_btn" disabled={movieEl === (list.length - 1)}
                onClick={() => { Next_movie_btn_func(movieEl + 1); setCountModal(countModal = 0) }}
              >Next Movie
              <img alt="icon_arow_right" className="icon_arow_right" src={icon_arow_right} />
              </button>
              <button className="next_movie_btn_mini" disabled={movieEl === (list.length - 1)}
                onClick={() => { Next_movie_btn_func(movieEl + 1); setCountModal(countModal = 0) }}
              >Next
              <img alt="icon_arow_right" className="icon_arow_right_mini" src={icon_arow_right} />
              </button>
            </div>
            <div className="center_content">
              <div className="center_left">

                <img className="selected_poster" alt="selected_poster"
                  src={`http://image.tmdb.org/t/p/w200/${list[movieEl]?.poster_path}` || DeathStarImg}
                  key={list[movieEl]?.id} />

              </div>
              <div className="center_right">
                <div className="add_to_fav_botton">
                  <button disabled={countModal === 1} className="add_to_fav"
                    onClick={() => { setBtnAddFilm(true) }} >
                    Add to favorite
                </button>
                  <button disabled={countModal === 0} className="del_from_fav"
                    onClick={() => { setBtnDelFilm(true) }} >
                    Unfavorite
                </button>
                </div>
                <div className="title_year">
                  {list[movieEl]?.title} ({list[movieEl]?.release_date.substr(0, 4)})
              </div>
                <div className="center_right_center">
                  <div className="score">
                    Score: {list[movieEl]?.vote_average}
                  </div>
                  <hr />
                  <div className="rating">
                    Rating: {(list[movieEl]?.adult === false) ? "R" : "PG"}
                  </div>
                  <hr />
                  <div className="release_date">
                    Release Date: {monthNames[(parseInt(list[movieEl]?.release_date.substr(5, 2)) - 1)]}
                    {list[movieEl]?.release_date.substr(8, 2)}, {list[movieEl]?.release_date.substr(0, 4)}
                  </div>
                </div>
                <hr id="disc_hr" />
                <div className="discription">
                  <p>{list[movieEl]?.overview}</p>
                </div>
                <hr id="disc_hr" />
              </div>
            </div>


            <div className="center_content_mini">
              <div className="center_top_mini">
                <div className="center_left">
                  <img className="selected_poster" alt="selected_poster"
                    src={`http://image.tmdb.org/t/p/w200/${list[movieEl]?.poster_path}` || DeathStarImg}
                    key={list[movieEl]?.id} />

                </div>
                <div className="center_right_mini">
                  <div className="add_to_fav_botton_mini">
                    <div className="score_mini" >
                      <p style={{ fontSize: '20px', marginBottom: '0px' }}>Score: </p>
                      <p style={{ fontSize: '30px', fontWeights: "bold", marginBlockStart: '0px', color: "white" }}>{list[movieEl]?.vote_average}</p>
                    </div>
                    <button disabled={countModal === 1} className="add_to_fav_mini"
                      onClick={() => { setBtnAddFilm(true) }} >
                      <img id="star" src={star} alt="add_to_fav" />
                    </button>
                    <button disabled={countModal === 0} className="del_from_fav_mini"
                      onClick={() => { setBtnDelFilm(true) }} >
                      <img id="star_unf" src={star_unf} alt="del_from_fav" />
                    </button>
                  </div>
                  <div className="rating">
                    <p style={{ fontSize: '20px', marginBottom: '0px' }}>Rating: </p>
                    <p style={{ fontSize: '30px', fontWeights: "bold", marginBlockStart: '0px', color: "white" }}>{(list[movieEl]?.adult === false) ? "R" : "PG"}</p>
                  </div>
                  <div className="release_date">
                    <p style={{ fontSize: '20px', marginBottom: '0px' }}>Release Date: </p>
                    <p style={{ fontSize: '30px', fontWeights: "bold", marginBlockStart: '0px', color: "white" }}>
                      {monthNames[(parseInt(list[movieEl]?.release_date.substr(5, 2)) - 1)]}
                      {` `}{list[movieEl]?.release_date.substr(8, 2)}, {list[movieEl]?.release_date.substr(0, 4)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="center_buttom_mini">
                <div className="title_year_mini">
                  {list[movieEl]?.title} ({list[movieEl]?.release_date.substr(0, 4)})
                </div>
                <hr id="disc_hr" />
                <div className="discription_mini">
                  <p>{list[movieEl]?.overview}</p>
                </div>
                <hr id="disc_hr" />
              </div>
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
