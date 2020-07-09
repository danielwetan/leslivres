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
      window.location.replace('http://localhost:5000/admin/genres');
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  return(
    <>
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-plus-circle"></i> Add Genre</span>

      <Modal isOpen={addModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Genre</ModalHeader>
        <ModalBody>
            <Form onSubmit={AddNewGenre}>
            <FormGroup>
              <Label for="title" className="smallTitle">Genre Name</Label>
              <Input type="text" onChange={(e) => setGenreName(e.target.value)} name="title" id="title" placeholder="Genre Name"/>
            </FormGroup>
            <Button color="danger" type="submit" className="btn-blue">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>

    </>
  )
}

export default AddGenre;