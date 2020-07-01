import React from 'react';
import backgroundImg from '../../images/background/svg/speech-to-text.svg';

import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      products: [],

    }
  }

  getAllBooks = () => {
    const token = localStorage.getItem('mainToken')
    axios({
      method: 'GET',
      url: 'http://localhost:3000/book',
      header: {
        Authorization: token
      }
    })
    .then((res) => {
      console.log(res)
    }) // ketika berhasil
    .catch((err) => {
      console.log(err.response)
    }) // ketika error
  }

  componentDidMount() {
    this.getAllBooks();
  }

  handleLogin = (event) => {
    event.preventDefault()
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth/login',
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then((res) => {
      console.log(res)
      localStorage.setItem('mainToken', res.data.body[0].mainToken)
      localStorage.setItem('refreshToken', res.data.body[0].refreshToken)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // image upload
  handlePostDefault = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name)
    formData.append('image', this.state.image[0])
    formData.append('price', this.state.price)
    formData.append('qty', this.state.qty)
    axios({
      method: 'POST',
      url: 'http://localhost:3000/book',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
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
        <form onSubmit={this.handleLogin}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input class="form-control" type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}></input>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" type="text" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}></input>
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

    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    </>
  )
  }
}

export default Main