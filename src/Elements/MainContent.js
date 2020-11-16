import React, { useEffect } from 'react';
import DeathStarImg from '../Img/DeathStarImg.png';
import {
  Link
} from "react-router-dom";
import Pagination from 'react-js-pagination';


const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US&page='

function MainContent(props) {
  let { list, setList,
    totItems, setTotItems,
    page, setPage,
    setMovieId,
    setMovieEl,
    setCountModal,
    countModal
  } = props

  useEffect(() => {
    setCountModal(countModal = 0)
  }, [countModal]
  )

  useEffect(() => {
    fetch(`${api}${page}`)
      .then(res => res.json())
      .then(res => {
        setList(res.results);
        setTotItems(res.total_results)
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
                <Link to="/SelectedMoviePage" onClick={() => { setMovieId(el.id); setMovieEl(index) }}>
                  <img className="poster" alt={el.title} src={`http://image.tmdb.org/t/p/w200/${el.poster_path}` || DeathStarImg} key={el.id} />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="div_pagin">
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={totItems}
            pageRangeDisplayed={5}
            onChange={setPage}
            prevPageText={'<'}
            nextPageText={'>'}
            firstPageText={'<<'}
            lastPageText={'>>'}
            hideDisabled={true}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      </div>
    </div>
  )
}

export default MainContent;
