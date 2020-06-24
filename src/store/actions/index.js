import setFavorites from './setFavorites.js'
import { setListMovies, fetchMovies } from './setListMovies.js';
import setLoading from './setLoading.js';
import setError from './setError.js';
import { fetchMovieDetail, setMovieDetail } from './setDetailMovie.js'

const allStore = {
  setFavorites,
  setListMovies,
  setLoading,
  setError,
  fetchMovies,
  setMovieDetail,
  fetchMovieDetail
}

export default allStore