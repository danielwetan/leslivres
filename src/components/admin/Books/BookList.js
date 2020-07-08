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
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Status</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {books.map((book) => {
        return <Book key={book.id} id={book.id} title={book.title} author={book.author} genre={book.genre} img={book.img} status={book.status} />
        })}
      </table>
    </>
  )
}

export default BookList