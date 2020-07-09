import React from 'react';
import backgroundImg from '../../../images/background/svg/reading-time.svg'

import { Link } from 'react-router-dom';

const Headline = () => {
  return(
    <>
          <div className="container">

        <div className="row mt-5">
          <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7">
                <div className="mt-3">
                  <span className="main-section-heading">
                    We've more than
                    a thousand book!                    
                  </span>
                  <br></br>
                  <span className="main-section-text">
                    Get unlimited reading for a dollar. Take it for a week or a month for the same price!.
                    Dont forget to keep your ID card.                    
                  </span>
                  <div>
                    <Link to="/book">
                      <button className="btn main-section-btn mt-3">Get the book <i class="fas fa-long-arrow-alt-right"></i></button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mt-5">
              <img src={backgroundImg}
          className="login-img"
          alt="Book"
          width="90%"
          height="90%"></img>
              </div>
            </div>
          </div>
          
          </div>
        </div>
        </div>
    </>
  )
}

export default Headline;