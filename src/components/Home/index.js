import React from 'react';
import BookLists from '../Home/BookLists'
import Featured from '../Home/Featured'
import Popular from '../Home/Popular'
import Genre from '../Home/Genre'
import backgroundImg from '../../images/background/svg/book-lover.svg'

const Home = () => {
  return(
    <>
      <div className="row">
        <div className="col-md-6">
          <Featured />
        </div>
        <div className="col-md-6 my-5">
          <img src={backgroundImg}
          className="login-img"
          alt="Book"
          width="100%"
          height="100%"></img>
        </div>
      </div>
      <div class="col-md-12">
        <BookLists />
      </div>
    </>
  )
}

export default Home;