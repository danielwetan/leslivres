import React from 'react';
import MainNavbar from '../../components/public/Menu'
import Sidebar from '../../components/public/Navigation/Sidebar'
import Footer from '../../components/public/Footer'
import Main from '../../components/public/BookDetail'
import axios from 'axios';

import {connect} from 'react-redux';

class BookDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.bookId,
      title: "",
      description: "",
      status: "",
      author: "",
      genre: "",
      img: ""
    }
  }


  getDetailBook = () => {
    axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `book/${this.state.id}`,
    })
    // this.props.book.getBookDetail(this.state.id)
    .then((res) => {
      this.setState({
        title: res.data.body[0].title,
        description: res.data.body[0].description,
        status: res.data.body[0].status,
        author: res.data.body[0].author,
        genre: res.data.body[0].genre,
        img: res.data.body[0].img
      })
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  Borrow = () => {
    axios({
      method: 'POST',
      url: 'http://192.168.43.186:3000/transaction',
      data: {
        user: this.props.auth.data.id,
        book: this.state.id,
        status: 1,
      },
      headers: {  
        Authorization: this.props.auth.data.mainToken
      }
    })
    .then(() => {
      console.log('Borrow success!')
      window.location.replace("http://localhost:5000/profile")
    })
    .catch((err) => {
      console.log(err.response.data.body)
    })
  }

  
  componentDidMount() {
    this.getDetailBook()
    // console.log(this.props.auth.data)
  }

  render() {
  return (
  <>
  <div className="container bg-white">
  <MainNavbar />
    <div className="container">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4  ">
          <Main 
            id={this.state.id}
            title={this.state.title}
            description={this.state.description}
            status={this.state.status}
            author={this.state.author}
            genre={this.state.genre}
            img={this.state.img}
          />
          {/* {console.log("####")}
          {console.log(this.props)}
        <p>{`Page with book id ${this.state.id}`}</p> */}
        </main>
      </div>
    <Footer />
    </div>
  </div>
  </>
  )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps)(BookDetail);