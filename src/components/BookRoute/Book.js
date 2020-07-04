import React from 'react';

import {Link} from 'react-router-dom';

const Book = (props) => {


  return(
    <>
      <div className="col-md-2 col-6 mt-3">
        <div class="card border-0 mr-auto">
          <img src={`http://localhost:3000/img/${props.img}`} class="card-img-top" alt="..."></img>
          <div class="card-body book-home mt-4">
            <Link to={`/book/${props.id}`}>
            <div class="book-title text-center home-book">
              <span className="sidebar-link">{props.title}</span>
            </div>
            </Link>
            <div class="book-author text-center mt-1">
              {props.author}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book