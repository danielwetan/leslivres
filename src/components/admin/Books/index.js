import React from 'react';
import AddBook from './Modals/AddBook'
import BookList from './BookList';

const Books = () => {
  return(
    <>
      <AddBook />
      <hr/>
      <BookList />
    </>
  )
}

export default Books;