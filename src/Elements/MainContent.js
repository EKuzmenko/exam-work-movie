import React, { useState, useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css
import {
  Link
} from "react-router-dom";

const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page='

function MainContent(props) {
  const [list, setList] = useState([])
  let { page, setPage } = props
  let {movieId, setMovieId} = props

  useEffect(() => {
    fetch(`${api}${page}`)
      .then(res => res.json())
      .then(res => setList(res.results))
      .catch(error => console.error(error))
  }, [page])

  return (
    <div className="mainContent">
      <p>Latest Releases</p>
      <div className="content">
        <div className="container">
          <div className="row">
            {list?.map(el =>
              <div className="img_div col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <Link to="/SelectedMoviePage" onClick={()=> setMovieId(el.id)}>
                  <img className="poster" src={`http://image.tmdb.org/t/p/w200/${el.poster_path}` || DeathStarImg} key={el.id} />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="div_pagin">
          <Pagination
            currentPage={page}
            totalPages={60}
            changeCurrentPage={setPage}
            theme="border-bottom"
          />
        </div>
      </div>
    </div>
  )
}

export default MainContent;
