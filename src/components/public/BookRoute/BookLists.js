import React, { useState, useEffect } from 'react';
import Book from './Book';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { Input } from 'reactstrap';


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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getBooks = () => {
    axios({
      metod: 'GET',
      url: process.env.REACT_APP_API_URL + 'book',
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
  }, [search, status, page, genre, getBooks]) // jika terjadi perubahan pada search, status, page, genre

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

  return (
    <>


      <div className="row mt-3 ">
        <div className="content-title col-md-2 mt-2">
          <h5 class="card-title">Book List</h5>
        </div>
        <div className="col-md-10">
          {/* <div className="dropdown">
            <button className="btn dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genre
              </button>
            <div className="dropdown-menu " aria-labelledby="#dropdownMenuButton">
              <Link to="/book?genre=biography" className="dropdown-item">Biography</Link>
              <Link to="/book?genre=classic" className="dropdown-item">Classic</Link>
              <Link to="/book?genre=history" className="dropdown-item">History</Link>
            </div>
          </div> */}
        <form>
          <Input type="text" name="search" placeholder="What are you looking for?" className="search-bar" />
        </form>

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