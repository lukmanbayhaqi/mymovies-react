import allStore from './index.js';
import axios from 'axios';

export function fetchMovieDetail(payload) {
  return (dispatch) => {
    dispatch(allStore.setLoading(true))
    axios({
      method: 'get',
      url: `http://www.omdbapi.com/?apikey=ceae1766&i=${payload}`
    })
      .then(({ data }) => {
        dispatch(setMovieDetail(data))
      })
      .catch(err => allStore.setError(err))
      .finally(_ => dispatch(allStore.setLoading(false)))
  }
}

export function setMovieDetail(payload) {
  return {
    type: 'SET_DETAIL_MOVIE',
    payload
  }
}