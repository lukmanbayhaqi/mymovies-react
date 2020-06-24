import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './assets/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import Navbar from './components/Navbar.jsx';
import DarkMode from './components/DarkMode.jsx';
import Favorites from './views/Favorites'

export default function App() {
  let [color, setColor] = useState(false)
  let colorDarkMode = {
    "backgroundColor": DarkMode(color),
    "minHeight": "100vh"
  }

  return (
    <Router>
      <div style={colorDarkMode}>
        <nav>
          <Navbar colorBg={(condition) => setColor(condition)} />
        </nav>
        <div className="home">
            <Switch>
              <Route path="/detail/:id">
                <MovieDetail />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/" >
                <Home />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  )
};
