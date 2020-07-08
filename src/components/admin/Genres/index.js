import React from 'react';
import GenreList from './GenreList';
import AddGenre from './Modals/AddGenre';

const Genres = () => {
  return(
    <>
      <AddGenre />
      <hr></hr>
      <GenreList />
    </>
  )
}

export default Genres;