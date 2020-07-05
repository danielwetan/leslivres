import React from 'react';

const Form = () => {
  return(
    <>
      <form>
        <div className="content-title">
          <h6 className="mx-sm-3">Get latest news</h6>
        </div>
        <div class="form-group mx-sm-3 mb-2">
          <input type="email" class="form-control" id="inputPassword2" placeholder="Enter Your Email"></input>
        </div>
      </form>
      <button type="button" class="btn bg-lightgray mx-sm-3 mt-1">Subscribe</button>
    </>
  )
}

export default Form