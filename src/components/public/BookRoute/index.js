import React from 'react';
import BookLists from '../BookRoute/BookLists'
import Pagination from './Pagination';
import './BookRoute.css';

const Home = () => {
  return(
    <>
      <div class="col-md-12 book-list-bg">
        <BookLists />
      </div>
      <div className="col-12 text-center align-items-center mt-4 smallTitle">
        <Pagination />
      </div>
    </>
  )
}

export default Home;