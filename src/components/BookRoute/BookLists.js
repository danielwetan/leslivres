import React, { Component } from 'react';
import Book from './Book';

import axios from 'axios';

import { Link } from 'react-router-dom';

class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  getBooks = () => {
    // const token = this.props.auth.data.token
    axios({
      metod: 'GET',
      url: 'http://localhost:3000/book',
      params: {
        search: '',
        page: ''
      }
    })
    .then((res) => {
      this.setState({        
        books: res.data.body
      })
      console.log(res.data.body)
      console.log("###")
      console.log(this.state.books)
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
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
                  <Link to="/add-book" className="dropdown-item">Biography</Link>
                  <Link to="/" className="dropdown-item">Classic</Link>
                  <Link to="/" className="dropdown-item">Fiction</Link>
                  <Link to="/" className="dropdown-item">History</Link>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          {this.state.books.map((book) => {
          return <Book key={book.id} id={book.id} title={book.title} author={book.author} img={book.img} />
          })}
          {/* {console.log("###")}
          {console.log(this.state.books)} */}
        </div>
      </>
    )
  }
}

export default MainContent;