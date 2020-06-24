import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Item, Dimmer, Loader } from 'semantic-ui-react';

import allStore from '../../store/actions'

export default function MovieDetail() {
  const { id } = useParams()
  const movieDetail = useSelector(({ detailMovie }) => detailMovie)
  const loading = useSelector(({ loading }) => loading)
  const error = useSelector(({ error }) => error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allStore.fetchMovieDetail(id))
  }, [ dispatch ])

  if(error) {
    return <p>Ooppss something wrong happen</p>
  }

  if(loading) {
    return (
      <Dimmer active>
        <Loader>Please Wait...</Loader>
      </Dimmer>
    )
  }

  if(movieDetail) {
    const items = [
      {
        childKey: `${movieDetail.imdbID}`,
        image: `${movieDetail.Poster}`,
        header: `${movieDetail.Title}`,
        description: `${movieDetail.Plot}`,
        meta: `${movieDetail.Runtime}`,
        extra: `Genre: ${movieDetail.Genre}`,
      }
    ]
    return (
      <Item.Group items={items} id="movieDetail" />
    )
  }

}