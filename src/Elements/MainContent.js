import React, { useState, useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import {
  Link
} from "react-router-dom";

const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page='

function MainContent(props) {
  let { list, setList,
        totPages, setTotPages,
        page, setPage,
        setMovieId,
        movieEl, setMovieEl,
        favArr, setFavArr,
        countModal, setCountModal,
        btnDelFilm, setBtnDelFilm,
        movieIdGet, setMovieIdGet } = props
        
   useEffect(() => {
    fetch(`${api}${page}`)
      .then(res => res.json())
      .then(res => {
        setList(res.results);
        setTotPages(res.total_pages);
      })
      .catch(error => console.error(error))
  }, [page])

  return (
    <div className="mainContent">
      <p>Latest Releases</p>
      <div className="content">
        <div className="container">
          <div className="row">
            {list?.map((el, index) =>
              <div className="img_list col-xl-2 col-lg-3 col-md-4 col-sm-6" id="img_list">
                <Link to="/SelectedMoviePage" onClick={() => { setMovieId(el.id); setMovieEl(index)}}>
                  <img className="poster" alt="poster" src={`http://image.tmdb.org/t/p/w200/${el.poster_path}` || DeathStarImg} key={el.id} />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="div_pagin">
          <Pagination
            firstPage={1}
            currentPage={page}
            totalPages={totPages}
            changeCurrentPage={setPage}
            theme="border-bottom"
          />
        </div>
      </div>
    </div>
  )
}

export default MainContent;
