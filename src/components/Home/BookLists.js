import React, { Component } from 'react';
import Book from './Book';

import axios from 'axios';

class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      title: '',
      author: ''
    }
  }

  getBooks = () => {
    axios({
      metod: 'GET',
      url: 'http://localhost:3000/book'
    })
    .then((res) => {
      // console.log(res.data.body[0].title)
      this.setState({
        books: res.data.body
      })
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
        {/* Book section */}
        <div className="content-title">
          <h5 class="card-title">Book Lists</h5>
        </div>
        <div className="row mt-3">
          {this.state.books.map((book) => {
          return <Book key={book.id} title={book.title} author={book.author} />
          })}
        </div>
      </>
    )
  }
}

export default MainContent;