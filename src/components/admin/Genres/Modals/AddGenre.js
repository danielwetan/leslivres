import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Label, Input} from 'reactstrap';

import {createGenre } from '../../../../redux/actions/genre'
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

const AddGenre = props => {
  const [addModal, setAddModal] = useState(false);
  const toggle = () => setAddModal(!addModal);

  const [genreName, setGenreName] = useState([]);

  const AddNewGenre = e => {
    e.preventDefault();
    const data = {
      name: genreName
    }
    const token = props.auth.data.mainToken
    props.dispatch(createGenre(data, token))
    .then(() => {
      Swal.fire(
        'New genre created!',
        'Success!',
        'success'
      )
      .then(() => {
        window.location.replace(process.env.REACT_APP_PUBLIC_URL + 'admin/genres')
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
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-plus-circle"></i> Add Genre</span>

      <Modal isOpen={addModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Book</ModalHeader>
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AddGenre)