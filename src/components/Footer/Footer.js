import React, { Component } from 'react'

import Form from './Form'
import Social from './Social'



class Footer extends Component {
  render() {
    return(
      <>
    <footer>
      <div className="mt-5 py-3">
        <div className="row justify-content-center ">
          <div className="col-md-4 col-12 ">
            <div className="mx-sm-3">
          <div className="content-title">
          <h6>About Us</h6>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nostrum ut illo. Aliquid, voluptates omnis, voluptas doloribus, laborum nisi error dolorum placeat assumenda porro deleniti excepturi quod doloremque corporis facilis</p>
          </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="mx-sm-3">
          <div className="content-title">
          <h6>Follow Us</h6>
          </div>
            <Social />
          </div>
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
}

export default Footer;