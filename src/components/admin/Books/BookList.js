import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([])

  const getBook = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/book'
    })
    .then((res) => {
      setBooks(res.data.body)
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  useEffect(() =>{
    getBook()
  }, [])


  return(
    <>

      {books.map((book) => {
        return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} status={book.status} />
      })}

    </>
  )
}

export default BookList