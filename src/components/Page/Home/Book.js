import React from 'react';
import Img from '../../../images/harry-potter.jpg';

const Book = () => {
  return(
    <>
      <div class="card border-0">
        <img src={Img} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <div class="book-title text-center">
            Harry Potter
          </div>
          </div>
      </div>
    </>
  )
}

export default Book