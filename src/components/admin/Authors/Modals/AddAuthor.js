import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const AddAuthor = () => {
  const [addModal, setAddModal] = useState(false);
  const toggle = () => setAddModal(!addModal);

  const [authorName, setAuthorName] = useState([]);

  const AddNewAuthor = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', authorName);
    axios({
      method: 'POST',
      url: 'http://localhost:3000/author',
      data: formData,
      header: {
        'Content-Type': 'multipart/form-data'
      } 
    })
    .then(() => {
      window.location.replace('http://localhost:5000/admin');
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  return(
    <>
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-plus-circle"></i> Add Author</span>


      <Modal isOpen={addModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Book</ModalHeader>
        <ModalBody>
            <Form onSubmit={AddNewAuthor}>
            <FormGroup>
              <Label for="title" className="smallTitle">Author Name</Label>
              <Input type="text" onChange={(e) => setAuthorName(e.target.value)} name="title" id="title" placeholder="Author Name"/>
            </FormGroup>
            <Button color="danger" type="submit">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>

    </>
  )
}

export default AddAuthor;