import React, { useState } from 'react';
import backgroundImg from '../../../../src/assets/images/background/svg/book-lover.svg';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';

import Swal from 'sweetalert2';

import './Login.css';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = e => {
    e.preventDefault()
    const data = {
      username: username,
      password: password
    }
    props.dispatch(login(data))
    .then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: toast => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Sign in success!'
      })
      props.history.push('/')
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Something error',
        text: 'Username or password is invalid!'
      })
    })
  }

  return (
    <>

      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div className="content-title">
          <h1 class="h1">Login</h1>
        </div>
      </div>

      {/* Main Section*/}
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-12">
          <form onSubmit={userLogin}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input class="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input class="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" class="btn btn-blue">Login</button>
          </form>
        </div>

        <div className="col-md-8 col-sm-12">
          <img src={backgroundImg}
            className="login-img"
            alt="Book"
            width="100%"
            height="100%"></img>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

const routePush = withRouter(Login);

// Hight order component
export default connect(mapStateToProps)(routePush);