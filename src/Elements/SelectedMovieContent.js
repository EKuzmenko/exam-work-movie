import React, {useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import icon_arow_right from '../Img/icon_arow_right.png';
import icon_arow_left from '../Img/icon_arow_left.png';

const api_movie = 'https://api.themoviedb.org/3/movie/';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function SelectedMovieContent(props) {
  let { movieId } = props
  let { movieIdGet, setMovieIdGet } = props

  useEffect(() => {
    fetch(`${api_movie}${movieId}?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US`)
      .then(res => res.json())
      .then(res => setMovieIdGet(res))
      .catch(error => console.error(error))
  }, [movieId])

   if (movieIdGet?.original_title) {
    return (
        <div className="modalWindow"  id="modal_container" style={{backgroundImage: `http://image.tmdb.org/t/p/w200/${movieIdGet?.poster_path}`}}>
          <div className="top_buttons">
              <button><img className="icon_arow_left" src={icon_arow_left} />Back to list</button>
              <button>Next Movie<img className="icon_arow_right" src={icon_arow_right} /></button>
            </div>
            <button>Add to favorite</button>
            <div className="title_year">
              {movieIdGet?.original_title} ({movieIdGet?.release_date.substr(0, 4)})
            </div>
            <div className="score">
                Score: {movieIdGet?.vote_average}
            </div>
            <div className="rating">
                Rating: {(movieIdGet?.adult === false) ? "R" : "PG"}
            </div>
            <div className="release_date">
                Release Date: {monthNames[(parseInt(movieIdGet?.release_date.substr(5, 2)) - 1)]} {movieIdGet?.release_date.substr(8, 2)}, {movieIdGet?.release_date.substr(0, 4)}
            </div>
            <div className="div_selected_poster">
                <img className="selected_poster" src={`http://image.tmdb.org/t/p/w200/${movieIdGet?.poster_path}` || DeathStarImg} key={movieIdGet?.id}/>
            </div>
            <div className="discription">
                <p>{movieIdGet?.overview}</p>
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
