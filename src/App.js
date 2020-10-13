import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './Pages/MainPage'
import MyFavoritePage from './Pages/MyFavoritePage'
import SelectedMoviePage from './Pages/SelectedMoviePage'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App () {
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
            <MainPage />
          </Route>
          <Route path="/MyFavoritePage">
            <MyFavoritePage/>
          </Route>
          <Route path="/SelectedMoviePage">
            <SelectedMoviePage />
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
