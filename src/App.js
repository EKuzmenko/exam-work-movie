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

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/MyFavoritePage">My Favotite</Link>
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
              />
          </Route>
          <Route path="/MyFavoritePage">
            <MyFavoritePage />
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
              setList={setList}/>
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
