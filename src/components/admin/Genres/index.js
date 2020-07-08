import React from 'react';
import GenreList from './GenreList';
import AddGenre from './Modals/AddGenre';

const Genres = () => {
  return(
    <>
      <AddGenre />
      <GenreList />
    </>
  )
}

export default Genres;