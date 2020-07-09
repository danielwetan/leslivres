import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const EditBookModal = props => {
  const [editBookModal, setEditBookModal] = useState(false);
  const toggle = () => setEditBookModal(!editBookModal);

  const [title, setTitle] = useState(`${props.title}`)
  const [author, setAuthor] = useState('1')
  const [genre, setGenre] = useState('1')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState([])
  const [status, setStatus] = useState('Available')

  const EditBook = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('genre', genre);
    formData.append('description', description);
    formData.append('img', img);
    formData.append('status', status);
    axios({
      method: 'PUT',
      url: `http://localhost:3000/book/${props.id}`,
      data: formData,
      header: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {
      window.location.replace('http://localhost:5000/admin');
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return(
    <>
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-edit"></i></span>
      {/******************/}
      <Modal isOpen={editBookModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Book</ModalHeader>
        <ModalBody>
        <Form onSubmit={EditBook}>
              <FormGroup>
                <Label for="title" className="smallTitle">Name</Label>
                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" placeholder=""/>
              </FormGroup>
              <FormGroup>
                <Label for="author" className="smallTitle">Author</Label>
                <Input type="select" value="1" name="author" id="author">
                  <option>Suzanne Colins</option>
                  <option>J.K. Rowling</option>
                  <option>Nelson Mandela</option>
                  <option>Plato</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="author" className="smallTitle">Genre</Label>
                <Input type="select" value="1" name="author" id="author">
                  <option>Fiction</option>
                  <option>Biography</option>
                  <option>Classic</option>
                  <option>History</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description" className="smallTitle">Description</Label>
                <Input type="textarea" onChange={(e) => setDescription(e.target.value)} name="description" id="description" />
              </FormGroup>
              <FormGroup>
                <Label for="img" className="smallTitle">Image</Label>
                <Input type="file" onChange={(e) => setImg(e.target.files)} name="img" id="img" />
              </FormGroup>
              <Button color="danger" type="submit" className="btn-blue">Submit</Button>
            </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default EditBookModal;