import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);
  const [status, setStatus] = useState('')

  const [addBookModal, setAddBookModal] = useState(false);
  const toggleAddBookModal = () => setAddBookModal(!addBookModal)

  const AddNewBook = event => {
    event.preventDefault();
    setAuthor(1)
    setGenre(1)
    setStatus("Available")
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('genre', genre);
    formData.append('description', description);
    formData.append('image', image[0]);
    formData.append('status', status);
    axios({
      method: 'POST',
      url: process.env.REACT_APP_API_URL + 'book',
      data: formData,
      header: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {
      window.location.replace(process.env.REACT_APP_PUBLIC_URL + 'admin')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <>
        {/* <Button onClick={toggleAddBookModal}>Add book</Button> */}
        <span onClick={toggleAddBookModal} className="book-edit btn bg-white"><i class="fas fa-plus-circle"></i> Add Book</span>
        {/*****************/}
        <Modal isOpen={addBookModal} toggle={toggleAddBookModal}>
        <ModalHeader toggle={toggleAddBookModal}>Add Book</ModalHeader>
        <ModalBody>
            <Form onSubmit={AddNewBook}>
            <FormGroup>
              <Label for="title" className="smallTitle">Name</Label>
              <Input type="text" onChange={(e) => setTitle(e.target.value)} name="title" id="title" placeholder="Book Title"/>
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
              <Label for="image" className="smallTitle">Image</Label>
              <Input type="file" onChange={(e) => setImage(e.target.files)} name="image" id="image" />
            </FormGroup>
            <Button color="danger" type="submit" className="btn-blue">Submit</Button>

          </Form>
        </ModalBody>
      </Modal>
      </>
  )
}

export default AddBook;