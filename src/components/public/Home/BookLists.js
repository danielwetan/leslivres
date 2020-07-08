import React, { useState, useEffect } from 'react';
import Book from './Book';
import axios from 'axios';

const MainContent = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios({
      metod: 'GET',
      url: 'http://localhost:3000/book'
    })
    .then((res) => {
      setBooks(res.data.body)
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    getBooks()
  }, []) // componentDidMount

  return(
    <>
      <div className="content-title">
        <h6 class="card-title home-title">Book Lists</h6>
      </div>
      <div className="row mt-3">
        {books.map((book) => {
        return <Book key={book.id} id={book.id} title={book.title} genre={book.genre} author={book.author} img={book.img} />
        })}
      </div>
    </>
  )
}

export default MainContent;