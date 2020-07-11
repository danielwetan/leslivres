import React from 'react'
import Form from './Form'
import Social from './Social'
import About from './About'
import './Footer.css';

const Footer = () => {
    return(
      <>
        <footer>
          <div className="mt-5 py-3">
            <div className="row justify-content-center ">
              <div className="col-md-4 col-12 ">
                <About />
              </div>
              <div className="col-md-4 col-12">
                <Social />
              </div>
              <div className="col-md-4 col-12">
                <Form />
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer;