import React, { useState, useEffect } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainContent = (props) => {

  // Get Query params
  let location = window.location.search;
  let params = new URLSearchParams(location);
  let searchParams = params.get('search');
  let statusParams = params.get('status');
  let pageParams = params.get('page');

  const [books, setBook] = useState([]);
  const [search, setSearch] = useState(searchParams);
  const [status, setStatus] = useState(statusParams)
  const [page, setPage] = useState(pageParams);



  const getBooks = () => {
    // const token = this.props.auth.data.token
    console.log(search)
    axios({
      metod: 'GET',
      url: `http://localhost:3000/book`,
      params: {
        search: search,
        status: status,
        page: page,
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
    
    getBooks()
    // console.log(searchParams)
    // console.log(statusParams)
    // console.log(pageParams)
  }, [])


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
                  <Link to="/book?genre=classic" className="dropdown-item">Classic</Link>
                  <Link to="/book?genre=fiction" className="dropdown-item">Fiction</Link>
                  <Link to="/book?genre=history" className="dropdown-item">History</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          {books.map((book) => {
          return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} />
          })}
          {/* {console.log("###")}
          {console.log(this.state.books)} */}
        </div>
      </>
    )
  }


export default MainContent;