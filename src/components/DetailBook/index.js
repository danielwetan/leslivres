import React, { Component } from 'react'
import Img from '../../images/harry-potter.jpg';

class DetailBook extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: "",
      description: ""
    }
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.title,
      description: this.props.description
    })
  }

  render() {
    return(
      <>
        <div class="row mt-4">
          <div class="col-md-3 col-sm-8 mb-3 text-center">
            <img src={`http://localhost:3000/img/${this.props.image}`} class="card-img-top" alt="..."></img>
            <button class="btn btn-outline-secondary mt-2 px-5 smallTitle"><i class="fas fa-truck"></i> Borrow</button>
          </div>
          <div class="col-md-6 col-sm-12 mb-3">
            <div class="card border-0">
              <h5 class="mb- smallTitle">{this.props.title}</h5>
              <p>{this.props.description}</p>
            </div>
          </div>
          
          <div class="col-md-3 col-sm-12">
            <div class="card border-0">
              <div className="book-status mb-1"><span class="badge badge-pill bg-lightgray ">{this.props.status}</span></div>
              <div><span className="smallTitle">Author:</span> {this.props.author}</div>
              <div><span className="smallTitle">Genre:</span> {this.props.genre}</div>
              <div><button className="book-edit btn bg-white"><i class="fas fa-edit"></i> Edit</button> | <button className="book-edit btn bg-white"><i class="fas fa-trash"></i> Delete</button></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DetailBook;