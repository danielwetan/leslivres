import React from 'react';
import MainNavbar from '../components/Navigation/MainNavbar/index'
import Sidebar from '../components/Navigation/Sidebar/index'
import Footer from '../components/Footer/index'
import Main from '../components/DetailBook/index'

class DetailBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      status: "",
      author: "",
      genre: ""
    }
  }

  componentDidMount() {

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
            title={this.state.title}
            description={this.state.description}
            status={this.state.status}
            author={this.state.author}
            genre={this.state.genre}
          />
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