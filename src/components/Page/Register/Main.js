import React from 'react';
import backgroundImg from '../../../images/background/svg/folder.svg';

class Main extends React.Component {

  render() {
  return(
    <>

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div className="content-title">
        <h1 class="h1">Register</h1>
        </div>
      </div>

    {/* Main Section*/}
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 col-sm-12">
      <img src={backgroundImg}
           className="register-img"
           alt="Book"
           width="100%"
           height="100%"></img>
      </div>
      <div className="col-md-4 col-sm-12 my-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" id="exampleInputPassword1" type="text"></input>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    </>
  )
  }
}

export default Main