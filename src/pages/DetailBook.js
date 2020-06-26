import React from 'react';
import NavbarMain from '../components/Navigation/NavbarMain'
import Sidebar from '../components/Navigation/Sidebar'
import Footer from '../components/Footer/Footer'


import axios from 'axios';

class DetailBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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
      // console.log(res)
    }) // ketika berhasil
    .catch((err) => {
      console.log(err)
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


  render() {
  return (
  <>
  <div className="container bg-white">
    <NavbarMain />
    <div className="container">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 bg-white">
          <p>Detail</p>
          <form onSubmit={this.handleLogin}>
            <div>
              <label>Username</label>
              <input type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}></input>
            </div>
            <div>
              <label>Password</label>
              <input type="text" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}></input>
            </div>
            <input type='submit' value='Login'></input>
          </form>
        </main>
      </div>
    <Footer />
    </div>
  </div>
  </>
  )
  }
}

export default DetailBook;