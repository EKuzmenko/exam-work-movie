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
  const [movieEl, setMovieEl] = useState(0)
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [favArr, setFavArr] = useState([])
  const [btnAddFilm, setBtnAddFilm] = useState(false)
  const [btnDelFilm, setBtnDelFilm] = useState(false)
  const [btnBack, setBtnBack] = useState(false)
  const [countModal, setCountModal] = useState(0)

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage
              list={list}
              setList={setList}
              page={page}
              setPage={setPage}
              setMovieId={setMovieId}
              setMovieEl={setMovieEl}
              setCountModal={setCountModal}
              countModal={countModal}
            />
          </Route>
          <Route path="/MyFavoritePage">
            <MyFavoritePage
              favArr={favArr}
              setFavArr={setFavArr}
              setMovieId={setMovieId}
              setMovieEl={setMovieEl}
              setList={setList}
              setBtnBack={setBtnBack}
              countModal={countModal}
              setCountModal={setCountModal}
              setBtnDelFilm={setBtnDelFilm}
              btnDelFilm={btnDelFilm}
              list={list}
              movieEl={movieEl}
            />
          </Route>
          <Route path="/SelectedMoviePage">
            <SelectedMoviePage
              movieId={movieId}
              setMovieId={setMovieId}
              movieEl={movieEl}
              setMovieEl={setMovieEl}
              list={list}
              favArr={favArr}
              setFavArr={setFavArr}
              btnAddFilm={btnAddFilm}
              setBtnAddFilm={setBtnAddFilm}
              btnBack={btnBack}
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
