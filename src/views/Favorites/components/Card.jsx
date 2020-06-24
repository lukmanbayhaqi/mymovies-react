import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Image, Button } from 'semantic-ui-react';

export default function Movies({ favorite }) {
  const history = useHistory();

  return (
    <Card>
      <Image src={favorite.Poster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {favorite.Title}
          </Card.Header>
        <Card.Meta>
          <span className='date'>{favorite.Type}</span>
        </Card.Meta>
        <Card.Description>
          Release: {favorite.Year}
        </Card.Description>
      </Card.Content>
      <Button
        attached='bottom'
        positive
        onClick={() => history.push(`/detail/${favorite.imdbID}`)}
      >
        Detail
      </Button>
    </Card>
  )
}