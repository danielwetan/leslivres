import React from 'react';

import { Link } from 'react-router-dom'

const Social = () => {
  return(
    <>
                <div className="mx-sm-3">

          <div className="content-title">
          <h6>Follow Us</h6>
          </div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <span>
                <div class="social-rounded">
                <Link to="/">
                    <i class="fab fa-facebook-f"></i>
                </Link>
                </div>
                </span>
              </li>
              <li class="list-inline-item">
                <span>
                <div class="social-rounded">
                <Link to="/">
                  <i class="fab fa-twitter"></i>
                </Link>
                </div>
                </span>
              </li>
              <li class="list-inline-item">
                <span>
                <div class="social-rounded">
                <Link to="/">
                  <i class="fab fa-instagram"></i>
                </Link>
                </div>
                </span>
              </li>
              <li class="list-inline-item">
                <span>
                <div class="social-rounded">
                <Link to="/">
                  <i class="fab fa-youtube"></i>
                </Link>
                </div>
                </span>
              </li>
              <li class="list-inline-item">
              <div class="social-rounded">
                <Link to="/">
                  <i class="fab fa-linkedin"></i>
                </Link>
                </div>
              </li>
            </ul>
            </div>
    </>
  )
}

export default Social;