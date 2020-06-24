import axios from 'axios';
import allStore from './index.js';

const title = ['batman', 'harry-potter']

export function fetchMovies() {
  let list = []
  return (dispatch) => {
    dispatch(allStore.setLoading(true))
    title.forEach((el, i) => {
      axios({
        method: 'get',
        url: `http://www.omdbapi.com/?apikey=ceae1766&s=${el}`
      })
        .then(({ data }) => {
          const { Search } = data
          Search.forEach(el => {
            list.push(el)
          })
          if (i === 1) {
            dispatch(setListMovies(list))
          }
        })
        .catch(err => allStore.setError(err))
        .finally(_ => dispatch(allStore.setLoading(false)))
    });
  }
}

export const setListMovies = (payload) => {
  return {
    type: 'SET_LIST_MOVIES',
    payload
  }
}