import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const DeleteGenre = props => {
  const [deleteModal, setDeleteModal] = useState(false);
  const toggle = () => setDeleteModal(!deleteModal);

  const deleteGenre = () => {
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/genre/${props.id}`
    })
    .then(() => {
      window.location.replace('http://localhost:5000/admin')
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  return(
    <>
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-trash"></i></span>
    
      <Modal isOpen={deleteModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Book</ModalHeader>
        <ModalBody>
          Are you sure to delete this?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteGenre} className="btn-blue">Delete</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </>
  )
}

export default DeleteGenre;