import React, { useState, useEffect } from 'react';
import Book from './Book';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const MainContent = () => {
  const location = useLocation()
  let params = new URLSearchParams(location.search)
  let searchParams = params.get('search')
  let statusParams = params.get('status')
  let pageParams = params.get('page')
  let genreParams = params.get('genre')

  const [books, setBook] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('')
  const [page, setPage] = useState('');
  const [genre, setGenre] = useState('');

  const getBooks = () => {
    axios({
      metod: 'GET',
      url: `http://localhost:3000/book`,
      params: {
        search: search,
        status: status,
        page: page,
        genre: genre
      }
    })
    .then((res) => {
      setBook(res.data.body)
    })
    .catch((err) => {
      console.log(err.response);
    })
  }
  useEffect(() => {
    setGenre(genreParams)
    setPage(pageParams)
    setStatus(statusParams)
    setSearch(searchParams)
  }, [genreParams, pageParams, statusParams, searchParams])

  useEffect(() => {
    getBooks()
  }, [search, status, page, genre]) // jika terjadi perubahan pada genre

  // equivalent to componentDidMount, fires once when component mounts
  // useEffect(() => {
  //   // get all the URLParams
  //   const params = new URLSearchParams(location.search);
  //   const q = params.get('q');
  //   // set language in state to the q parameter
  //   setLanguage(q ? q : 'MatLab');
  //   //eslint-disable-next-line
  // }, []);


  // const submitAction = (e) => {
  //   e.preventDefault()
  //   setLanguage(input)
  //   History.push('/book?q=' + input)
  //   setInput('')
  // }

    return(
      <>
        <div className="row">
          <div className="content-title col-6 mt-2">
            <h5 class="card-title">Book Lists</h5>
          </div>
          <div className="col-6 text-right">
            <div className="dropdown">
              <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genre
              </button>
                <div className="dropdown-menu " aria-labelledby="#dropdownMenuButton">
                  <Link to="/book?genre=biography" className="dropdown-item">Biography</Link>
                  <Link to="/book?genre=classic" className="dropdown-item">Classic (Link)</Link>
                  <a href="/book?genre=classic" className="dropdown-item">Classic (ahref)</a>
                  <Link to="/book?genre=history" className="dropdown-item">History</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          {books.map((book) => {
          return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} />
          })}
        </div>
      </>
    )
  }


export default MainContent;