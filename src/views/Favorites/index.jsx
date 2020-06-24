import React from 'react';
import { useSelector } from 'react-redux';

import Card from './components/Card.jsx';

export default function Favorites() {
  const favorites = useSelector(({ favorites }) => favorites)
  return (
    <>
      {favorites.map((favorite, i) => (
        <Card key={i} favorite={favorite} />
      ))}
    </>
  )
}