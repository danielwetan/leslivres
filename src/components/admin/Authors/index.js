import React from 'react';
import AuthorList from './AuthorList';
import AddAuthor from './Modals/AddAuthor';

const Authors = () => {
  return(
    <>
      <AddAuthor />
      <hr></hr>
      <AuthorList />
    </>
  )
}

export default Authors;