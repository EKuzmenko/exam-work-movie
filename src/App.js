import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './Pages/MainPage'
import MyFavoritePage from './Pages/MyFavoritePage'
import SelectedMoviePage from './Pages/SelectedMoviePage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movieId, setMovieId] = useState(0)
  const [movieIdGet, setMovieIdGet] = useState({})
  const [movieEl, setMovieEl] = useState(0)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  //const [movArr, setMovArr] = useState({})
  const [favArr, setFavArr] = useState([])
  //const [favArrStor, setFavArrStor] = useState([])
  const [btnAddFilm, setBtnAddFilm] = useState(false)
  const [btnDelFilm, setBtnDelFilm]=useState(false)
  const[btnBack, setBtnBack]=useState(false)
  const [countModal, setCountModal] = useState(0)

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MyFavoritePage">My Favorite</Link>
            </li>
          </ul>
        </nav>
 */}
        <Switch>
          <Route exact path="/">
            <MainPage
              movieId={movieId}
              setMovieId={setMovieId}
              movieIdGet={movieIdGet}
              setMovieIdGet={setMovieIdGet}
              movieEl={movieEl}
              setMovieEl={setMovieEl}
              list={list}
              setList={setList}
              page={page}
              setPage={setPage}
              //movArr={movArr}
              //setMovArr={setMovArr}
              favArr={favArr}
              setFavArr={setFavArr}
              countModal={countModal}
              setCountModal={setCountModal}
              btnDelFilm={btnDelFilm}
              setBtnDelFilm={setBtnDelFilm}

            />
          </Route>
          <Route path="/MyFavoritePage">
            <MyFavoritePage
              favArr={favArr}
              setFavArr={setFavArr}
              movieIdGet={movieIdGet}
              setMovieIdGet={setMovieIdGet}
              movieId={movieId}
              setMovieId={setMovieId}
              //favArrStor={favArrStor}
              //setFavArrStor={setFavArrStor}
              movieEl={movieEl}
              setMovieEl={setMovieEl}
              list={list}
              setList={setList}
              btnBack={btnBack}
              setBtnBack={setBtnBack}
              btnDelFilm={btnDelFilm}
              setBtnDelFilm={setBtnDelFilm}
            />
          </Route>
          <Route path="/SelectedMoviePage">
            <SelectedMoviePage
              movieId={movieId}
              setMovieId={setMovieId}
              movieIdGet={movieIdGet}
              setMovieIdGet={setMovieIdGet}
              movieEl={movieEl}
              setMovieEl={setMovieEl}
              list={list}
              setList={setList}
              page={page}
              setPage={setPage}
              //movArr={movArr}
              //setMovArr={setMovArr}
              favArr={favArr}
              setFavArr={setFavArr}
              //favArrStor={favArrStor}
              //setFavArrStor={setFavArrStor}
              btnAddFilm={btnAddFilm}
              setBtnAddFilm={setBtnAddFilm}
              btnBack={btnBack}
              setBtnBack={setBtnBack}
              countModal={countModal}
              setCountModal={setCountModal}
              btnDelFilm={btnDelFilm}
              setBtnDelFilm={setBtnDelFilm}
            />
          </Route>
          <Route path="*">
            <div>Path error: 404</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
