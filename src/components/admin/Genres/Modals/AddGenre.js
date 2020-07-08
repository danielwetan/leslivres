import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const AddGenre = () => {
  const [addModal, setAddModal] = useState(false);
  const toggle = () => setAddModal(!addModal);

  const [genreName, setGenreName] = useState([]);

  const AddNewGenre = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', genreName);
    axios({
      method: 'POST',
      url: 'http://localhost:3000/genre',
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
      <Button onClick={toggle} color="red" className="btn btn-outline-danger">Add Genre</Button>

      <Modal isOpen={addModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Book</ModalHeader>
        <ModalBody>
            <Form onSubmit={AddNewGenre}>
            <FormGroup>
              <Label for="title" className="smallTitle">Genre Name</Label>
              <Input type="text" onChange={(e) => setGenreName(e.target.value)} name="title" id="title" placeholder="Genre Name"/>
            </FormGroup>
            <Button color="danger" type="submit">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>

    </>
  )
}

export default AddGenre;