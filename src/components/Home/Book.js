import React from 'react';
import Img from '../../images/harry-potter.jpg';

const Book = (props) => {
  return(
    <>
      <div className="col-md-2 col-sm-6">
        <div class="card border-0 mr-auto">
          <img src={Img} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <div class="book-title text-center">
              {props.title}
            </div>
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