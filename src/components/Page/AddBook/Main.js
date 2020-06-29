import React from 'react'
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import Img from '../../../images/background/svg/reading-time.svg'

const AddBook = () => {
  return(
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <div className="content-title">
        <h1 class="h1">Add New Book</h1>
        </div>
      </div>
      <Row>
        <Col md="7">
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

        </Col>
        <Col md="5" style={{marginTop: '200px'}}>
        <img src={Img}
           alt="Book"
           width="100%"
           height="100%"></img>
        </Col>
      </Row>
    </>
  )
}

export default AddBook