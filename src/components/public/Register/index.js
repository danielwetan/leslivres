import React, {useState, useEffect} from 'react';
import backgroundImg from '../../../../src/assets/images/background/svg/book-lover.svg';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../../redux/actions/auth'
import './Register.css';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(2);

  // Post new user to db
  const handleRegister = event => {
    event.preventDefault()
    const data = {
        username: username,
        full_name: fullName,
        email: email,
        password: password,
        role: role
    }
    console.log(data)
    props.register(data).then(
      props.history.push("/login")
    )
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/auth/register',
    //   data: {
    //     username: this.state.username,
    //     full_name: this.state.full_name,
    //     email: this.state.email,
    //     password: this.state.password,
    //     role: this.state.role
    //   }
    // }).
    // then(
    //   console.log("Register success!")
    // )
  }

  return(
    <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div className="content-title">
        <h1 className="h1">Register</h1>
        </div>
      </div>
    {/* Main Section*/}
    <div className="row justify-content-center align-items-center">
      
    <div className="col-md-4 col-sm-12 my-4">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label for="email">Username</label>
            <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="full-name">Full Name</label>
            <input className="form-control" type="txt" value={fullName} onChange={(e) => setFullName(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input className="form-control" type="txt" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button type="submit" class="btn btn-blue">Submit</button>
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

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { register };

const routePush = withRouter(Register);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routePush)