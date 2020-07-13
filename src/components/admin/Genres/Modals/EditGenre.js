import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { updateGenre } from '../../../../redux/actions/genre';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const EditGenre = props => {
  const [genreName, setGenreName] = useState(`${props.name}`);
  const [editModal, setEditModal] = useState(false);
  const toggle = () => setEditModal(!editModal);

  const editGenre = e => {
    e.preventDefault();
    const data = {
      name: genreName
    }
    const token = props.auth.data.mainToken
    const id = props.id
    props.dispatch(updateGenre(id, data, token))
    .then(() => {
      Swal.fire(
        'Success!',
        'Update Genre success!',
        'success'
      )
      .then(() => {
        window.location.replace("http://localhost:5000/admin/genres")
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err
        })
      })
    })
  }

  return (
    <>
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-edit"></i></span>

      <Modal isOpen={editModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Genre</ModalHeader>
        <ModalBody>
          <Form onSubmit={editGenre}>
            <FormGroup>
              <Label for="title" className="smallTitle">Genre Name</Label>
              <Input type="text" onChange={(e) => setGenreName(e.target.value)} name="name" id="name" placeholder="Genre Name" />
            </FormGroup>
            <Button color="danger" type="submit" className="btn-blue">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  genre: state.genre,
})

export default connect(mapStateToProps)(EditGenre);