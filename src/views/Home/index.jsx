import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allStore from '../../store/actions'

import { Dimmer, Loader } from 'semantic-ui-react';

import Card from './components/Card.jsx';

export default function Movies() {
  const dispatch = useDispatch()
  const movies = useSelector(({ movies }) => movies)
  const loading = useSelector(({ loading }) => loading)
  const error = useSelector(({ error }) => error)

  useEffect(() => {
    dispatch(allStore.fetchMovies())
  }, [dispatch])

  if (loading) {
    return (
      <Dimmer active>
        <Loader>Please Wait...</Loader>
      </Dimmer>
    )
  }
  
  if (error) {
    return <h1>ooops something wrong happen</h1>
  }

  return (
    <>
      {movies.map((movie, i) => (
        <Card key={i} movie={movie} />
      ))}
    </>
  )
}