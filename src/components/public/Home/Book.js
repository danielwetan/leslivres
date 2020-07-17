import React from 'react';

import {Link} from 'react-router-dom';

const Book = props => {
  return(
    <>
      <div className="col-md-2 col-6 mt-2">
        <div class="card border-0 mr-auto">
          <img src={process.env.REACT_APP_API_URL + `img/${props.img}`} class="card-img-top" alt="..."></img>
          <div class="card-body book-home mt-4">
            <Link to={`/book/${props.id}`} className="book-display-link">
            <div class="book-title home-book">
              <span>{props.title}</span>
            </div>
            </Link>
            <div class="book-author">
              <span>{props.author}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book