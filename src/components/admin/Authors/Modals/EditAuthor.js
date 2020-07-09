import React, {useState} from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

const EditAuthor = props => {
  const [authorName, setAuthorName] = useState(`${props.name}`);
  const [editModal, setEditModal] = useState(false);
  const toggle = () => setEditModal(!editModal);

  const editAuthor = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', authorName);
    axios({
      method: 'PUT',
      url: `http://localhost:3000/author/${props.id}`,
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
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-edit"></i></span>

      <Modal isOpen={editModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Author</ModalHeader>
        <ModalBody>
            <Form onSubmit={editAuthor}>
            <FormGroup>
              <Label for="title" className="smallTitle">Author Name</Label>
              <Input type="text" onChange={(e) => setAuthorName(e.target.value)} name="name" id="name" placeholder="Author Name"/>
            </FormGroup>
            <Button color="danger" type="submit" className="btn-blue">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default EditAuthor;