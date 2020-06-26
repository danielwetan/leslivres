import React from 'react';

const Form = () => {
  return(
    <>
    <div className="content-title">
<h5 className="mx-sm-3">Get latest news</h5>
</div>
<form >
  <div class="form-group mx-sm-3 mb-2">
    <input type="email" class="form-control" id="inputPassword2" placeholder="Enter Your Email"></input>
  </div>
</form>
<button type="button" class="btn btn-primary mx-sm-3 mt-2">Subscribe</button>

    </>
  )
}

export default Form