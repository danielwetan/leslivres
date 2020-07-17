import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Label, Input} from 'reactstrap';

import {createAuthor } from '../../../../redux/actions/author'
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

const AddAuthor = props => {
  const [addModal, setAddModal] = useState(false);
  const toggle = () => setAddModal(!addModal);

  const [authorName, setAuthorName] = useState([]);

  const AddNewAuthor = e => {
    e.preventDefault();
    const data = {
      name: authorName
    }
    const token = props.auth.data.mainToken
    props.dispatch(createAuthor(data, token))
    .then(() => {
      Swal.fire(
        'New author created!',
        'Success!',
        'success'
      )
      .then(() => {
        window.location.replace(process.env.REACT_APP_PUBLIC_URL + 'admin/authors')
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Something error!',
          text: err
        })
      })
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
            <Button color="danger" type="submit" className="btn-blue">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>

    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AddAuthor)