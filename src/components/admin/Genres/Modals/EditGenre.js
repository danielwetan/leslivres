import React, {useState} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';

const EditGenre = props => {
  const [genre, setGenreName] = useState(`${props.name}`);
  const [editModal, setEditModal] = useState(false);
  const toggle = () => setEditModal(!editModal);

  const editGenre = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', genre);
    axios({
      method: 'PUT',
      url: `http://localhost:3000/genre/${props.id}`,
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
      <Button onClick={toggle} color="blue" className="btn-outline-info mx-2">Edit</Button>

      <Modal isOpen={editModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Genre</ModalHeader>
        <ModalBody>
            <Form onSubmit={editGenre}>
            <FormGroup>
              <Label for="title" className="smallTitle">Genre Name</Label>
              <Input type="text" onChange={(e) => setGenreName(e.target.value)} name="name" id="name" placeholder="Genre Name"/>
            </FormGroup>
            <Button color="danger" type="submit">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default EditGenre;