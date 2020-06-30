import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import Img from '../../images/background/svg/reading-time.svg'

import axios from 'axios';

class AddBook extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      author: "",
      genre: "",
      description: "",
      image: []
    }
  }

  addNewBook = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title)
    formData.append('author', this.state.author)
    formData.append('genre', this.state.genre)
    formData.append('description', this.state.description)
    formData.append('image', this.state.image[0])
    axios({
      method: 'POST',
      url: 'http://localhost:3000/book',
      data: formData
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
          <h1 class="h1">Add New Book</h1>
          </div>
        </div>
        <div class="row">
          <div className="col-md-6">  
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Book Title"/>
              </FormGroup>
              <FormGroup>
                <Label for="author">Author</Label>
                <Input type="select" name="author" id="author">
                  <option>Suzanne Colins</option>
                  <option>J.K. Rowling</option>
                  <option>Nelson Mandela</option>
                  <option>Plato</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="author">Genre</Label>
                <Input type="select" name="author" id="author">
                  <option>Fiction</option>
                  <option>Biography</option>
                  <option>Classic</option>
                  <option>History</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input type="file" name="image" id="image" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>

          </div>
          <div className="col-md-5" style={{marginTop: '200px'}}>
          <img src={Img}
            alt="Book"
            width="100%"
            height="100%"></img>
          </div>
        </div>
      </>
    )
  }
}

export default AddBook