import React, { useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import DeathStarImg from '../Img/DeathStarImg.png';

function MyFavoriteContent(props) {

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

  function Open_Modal(id, index){
    setMovieId(id); 
    setMovieEl(index); 
    setBtnBack(true)
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favArray")) === null) {
      localStorage.setItem("favArray", JSON.stringify([]));
    }
    if (favArr.length === 0) {
      setFavArr(JSON.parse(localStorage.getItem("favArray")));
    }
    setList(favArr);
  }, [favArr.length]);

  useEffect(() => {
    if (btnDelFilm === true) {
      let array = favArr.filter(el=>el.id!==list[movieEl].id);
      setFavArr(array);
      localStorage.setItem("favArray", JSON.stringify(array));
      setBtnDelFilm(false);
      setCountModal(countModal = 0)
    }
  }, [favArr, btnDelFilm, countModal])

  if (favArr.length > 0) {
    return (
      <div className="myFavoriteContent">
        <p>My Favorite</p>
        <div className="fav_main_content">

          {favArr?.map((el, index) =>

            <div className="fav_container">
              <div className="fav_film_div" id="fav_film_div">
                <Link to="/SelectedMoviePage" onClick={() => { Open_Modal(el.id, index) }}>
                  <img className="fav_poster" alt="poster" src={`http://image.tmdb.org/t/p/w200/${el.poster_path}` || DeathStarImg} key={el.id} />
                </Link>
              </div>
              <div className="fav_center">
                <div className="fav_center_top">
                  <div className="fav_title">
                    <Link to="/SelectedMoviePage" onClick={() => { Open_Modal(el.id, index) }}>
                      <h4>{el.title}</h4>
                    </Link>
                  </div>
                  <div className="del_to_fav_botton">
                    <button className="fav_del_from_fav" onClick={() => { setMovieId(el.id); setMovieEl(index); setBtnDelFilm(true)}} >
                      Unfavorite
                </button>
                  </div>
                </div>
                <div className="fav_center_buttom">
                  <div className="fav_overview">
                    <p className="fav_p">{el.overview}</p>
                  </div>
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
