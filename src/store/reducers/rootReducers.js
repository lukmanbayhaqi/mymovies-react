import { combineReducers } from 'redux';
import favoritesReducers from './favoritesReducers.js';
import movieReducers from './listMoviesReducers.js';
import loadingReducers from './loadingReducers.js';
import errorReducers from './errorReducers.js';
import detailMovie from './detailMovieReducers.js';

const rootReducers = combineReducers({
  favorites: favoritesReducers,
  movies: movieReducers,
  loading: loadingReducers,
  error: errorReducers,
  detailMovie
})

export default rootReducers