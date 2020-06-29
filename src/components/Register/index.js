import React from 'react';
import backgroundImg from '../../images/background/svg/folder.svg';

import axios from 'axios';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      role: 2
    }
  }

  // Post new user to db
  handleRegister = (event) => {
    event.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/register',
      data: {
        username: this.state.username,
        password: this.state.password,
        role: this.state.role
      }
    })
  }

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
      
    <div className="col-md-4 col-sm-12 my-4">
        <form onSubmit={this.handleRegister}>
          <div class="form-group">
            <label for="email">Username</label>
            <input class="form-control" type="text" value={this.state.email} onChange={(e) => this.setState({username: e.target.value})}></input>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control" type="password" value={this.state.email} onChange={(e) => this.setState({password: e.target.value})}></input>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

      <div className="col-md-8 col-sm-12">
      <img src={backgroundImg}
           className="register-img"
           alt="Book"
           width="100%"
           height="100%"></img>
      </div>
    </div>

    </>
  )
  }
}

export default Register