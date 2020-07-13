import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { updateAuthor } from '../../../../redux/actions/author';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const EditAuthor = props => {
  const [authorName, setAuthorName] = useState(`${props.name}`);
  const [editModal, setEditModal] = useState(false);
  const toggle = () => setEditModal(!editModal);

  const editAuthor = e => {
    e.preventDefault();
    const data = {
      name: authorName
    }
    const token = props.auth.data.mainToken
    const id = props.id
    props.dispatch(updateAuthor(id, data, token))
    .then(() => {
      Swal.fire(
        'Success!',
        'Update Author success!',
        'success'
      )
      .then(() => {
        window.location.replace("http://localhost:5000/admin/authors")
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
        <ModalHeader toggle={toggle}>Edit Author</ModalHeader>
        <ModalBody>
          <Form onSubmit={editAuthor}>
            <FormGroup>
              <Label for="title" className="smallTitle">Author Name</Label>
              <Input type="text" onChange={(e) => setAuthorName(e.target.value)} name="name" id="name" placeholder="Author Name" />
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
  author: state.author,
})

export default connect(mapStateToProps)(EditAuthor);