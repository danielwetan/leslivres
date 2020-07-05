import React from 'react';
import MainNavbar from '../../components/public/Navigation/MainNavbar'
import Sidebar from '../../components/public/Navigation/Sidebar'
import Footer from '../../components/public/Footer'
import Main from '../../components/public/DetailBook'
import axios from 'axios';

class DetailBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.bookId,
      title: "",
      description: "",
      status: "",
      author: "",
      genre: "",
      image: ""
    }
  }

  getDetailBook = () => {
    axios({
      method: "GET",
      url: `http://localhost:3000/book/${this.state.id}`,
    })
    .then((res) => {
      this.setState({
        title: res.data.body[0].title,
        description: res.data.body[0].description,
        status: res.data.body[0].status,
        author: res.data.body[0].author,
        genre: res.data.body[0].genre,
        image: res.data.body[0].image
      })
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  componentDidMount() {
    this.getDetailBook()
  }

  render() {
  return (
  <>
  <div className="container bg-white">
  <MainNavbar />
    <div className="container">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
          <Main 
            id={this.state.id}
            title={this.state.title}
            description={this.state.description}
            status={this.state.status}
            author={this.state.author}
            genre={this.state.genre}
            image={this.state.image}
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

export default DetailBook;