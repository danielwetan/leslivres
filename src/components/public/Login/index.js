import React, { useState } from 'react';
import backgroundImg from '../../../images/background/svg/speech-to-text.svg';
// import axios from 'axios';
import { withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import { login } from '../../../redux/actions/auth';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [products, setProducts] = useState('');
  
  const handleLogin = event => {
    event.preventDefault()
    const data = {
      username: username,
      password: password
    }
    console.log(data);
    props.login(data).then(() => {
      props.history.push("/")
    })
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3000/auth/login',
    //   data: {
    //     username: this.state.username,
    //     password: this.state.password
    //   }
    // })
    // .then((res) => {
    //   localStorage.setItem('mainToken', res.data.body[0].mainToken)
    //   localStorage.setItem('refreshToken', res.data.body[0].refreshToken)
    //   console.log(res)
    //   // this.goToHome()
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  // const goToHome = () => {
  //   props.history.push('/')
  // }

  // image upload
  // handlePostDefault = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', this.state.name)
  //   formData.append('image', this.state.image[0])
  //   formData.append('price', this.state.price)
  //   formData.append('qty', this.state.qty)
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3000/book',
  //     data: formData,
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

    // console.log(this.props.auth)
    return(
    <>

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div className="content-title">
        <h1 class="h1">Login</h1>
        </div>
      </div>

    {/* Main Section*/}
    <div className="row justify-content-center align-items-center">
    <div className="col-md-4 col-sm-12">
        <form onSubmit={handleLogin}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input class="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
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

const mapDispatchToProps = { login };

const routePush = withRouter(Login);

// Hight order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routePush);