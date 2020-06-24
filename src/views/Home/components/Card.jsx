import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Card, Image, Button } from 'semantic-ui-react';

export default function Movies({ movie }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites)

  let disabled = false

  favorites.forEach(el => {
    if(el.imdbID === movie.imdbID) {
      disabled = true
    }
  })

  function addToFavorite(payload) {
    dispatch({ type: 'SET_FAVORITES', payload })
  }

  return (
    <Card>
      <Image src={movie.Poster} wrapped ui={false} />
      <Button
        attached='bottom'
        negative
        disabled={disabled}
        onClick={() => addToFavorite(movie)}
      >
        Add to favorites
      </Button>
      <Card.Content>
        <Card.Header>
          {movie.Title}
          </Card.Header>
        <Card.Meta>
          <span className='date'>{movie.Type}</span>
        </Card.Meta>
        <Card.Description>
          Release: {movie.Year}
        </Card.Description>
      </Card.Content>
      <Button
        attached='bottom'
        positive
        onClick={() => history.push(`/detail/${movie.imdbID}`)}
      >
        Detail
      </Button>
    </Card>
  )
}