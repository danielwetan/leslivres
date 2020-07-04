import React from 'react';
import backgroundImg from '../../images/background/svg/folder.svg';
// import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../redux/actions/auth'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      full_name: '',
      email: '',
      password: '',
      role: 2
    }
  }

  // Post new user to db
  handleRegister = event => {
    event.preventDefault()
    const data = {
        username: this.state.username,
        full_name: this.state.full_name,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
    }
    console.log(data)
    this.props.register(data).then(
      this.props.history.push("/")
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

  render() {
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
        <form onSubmit={this.handleRegister}>
          <div className="form-group">
            <label for="email">Username</label>
            <input className="form-control" type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}></input>
          </div>
          <div className="form-group">
            <label for="full-name">Full Name</label>
            <input className="form-control" type="txt" value={this.state.full_name} onChange={(e) => this.setState({full_name: e.target.value})}></input>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input className="form-control" type="txt" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input className="form-control" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}></input>
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

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { register };

const routePush = withRouter(Register);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(routePush)