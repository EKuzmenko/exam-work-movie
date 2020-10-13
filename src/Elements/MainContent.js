import React, { useState, useEffect } from 'react';
//import Pagination from "react-pagination-library";
//import "react-pagination-library/build/css/index.css"; //for css
import { Row, Container } from 'bootstrap';  
import DeathStarImg from '../Img/DeathStarImg.png';

const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page=1'

function MainContent(props) {
  const [data, setData] = useState([])
  let { moviesId } = props
  
  useEffect(() => {

    // fetch(`${api}people/?page=${page}`)
    fetch(`${api}`)
      .then(res => res.json())
      .then(res => setData(res.results))
      .catch(error => console.error(error))
  }, [data])
  
  return (
    <div className="mainContent">
      <p>Latest Releases</p>
      <>
      {data?.map(el=><img  src={`http://image.tmdb.org/t/p/w342/${el.poster_path}` ||DeathStarImg} key={el.id} />)}
      </>


    <div className="container">
      <div className="row">
        <div className="img_div col-xl-2 col-lg-2 col-md-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
          <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
        </div>
        <div className="img_div col-xl-2 col-lg-2 col-md-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
          <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
        </div>
        <div className="img_div col-xl-2 col-lg-2 col-md-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
          <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
        </div>
        <div className="img_div col-xl-2 col-lg-2 col-md-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
          <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
        </div>
        <div className="img_div col-xl-2 col-lg-2 col-md-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
          <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
        </div>
        <div className="img_div col-xl-2 col-lg-2 col-md-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
          <img id="DeathStarImg" src={DeathStarImg} alt="DeathStarImg" />
        </div>
        <div className="w-100"></div>
      </div>
    </div>
    </div>
  )
}

export default MainContent;
