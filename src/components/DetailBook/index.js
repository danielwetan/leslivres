import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

const DetailBook = (props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const [deleteModalSuccess, setDeleteModalSuccess] = useState(false);
  const toggleDeleteModalSuccess = () => setDeleteModalSuccess(!deleteModalSuccess)

  const [updateModal, setUpdateModal] = useState(false);
  const toggleUpdateModal = () => setUpdateModal(!updateModal)

  const [borrowModal, setBorrowModal] = useState(false);
  const toggleBorrowModal = () => setBorrowModal(!borrowModal)

  function deleteBook() {
    Axios({
      method: 'DELETE',
      url: `http://localhost:3000/book/${props.id}`
    })
    .then((res) => {
      // display modal successfully delete
      console.log("Book successfully deleted")
      redirectToHome()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  let history = useHistory()

  function redirectToHome() {
    history.push('/')
  }

  return(
      <>
        <div class="row mt-4">
          <div class="col-md-3 col-sm-8 mb-3 text-center">
            <img src={`http://localhost:3000/img/${props.image}`} class="card-img-top" alt="..."></img>
            <button class="btn btn-outline-secondary mt-2 px-5 smallTitle" onClick={toggleBorrowModal}><i class="fas fa-truck"></i> Borrow</button>
          </div>
          <div class="col-md-6 col-sm-12 mb-3">
            <div class="card border-0">
              <h5 class="mb- smallTitle">{props.title}</h5>
              <div className="book-status mb-1"><span class="badge bg-lightgray ">{props.status}</span> 
              <button className="book-edit btn bg-white" onClick={toggleUpdateModal}><i class="fas fa-edit"></i> Edit</button>|<button className="book-edit btn bg-white" data-toggle="modal" data-target="#deleteBook" onClick={toggleDeleteModal}><i class="fas fa-trash"></i> Delete</button></div>
              <p>{props.description}</p>
            </div>
          </div>
        </div>

        {/*Delete Modal*/}
        <div>
          <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
            <ModalHeader toggle={toggleDeleteModal} className="border-0 smallTitle" charCode={<i class="fas fa-times-circle"></i>}></ModalHeader>
            <ModalBody style={{fontSize: "18px"}} >
              Are you sure to delete this book?
            </ModalBody>
            <ModalFooter className="border-0">
              <Button color="danger" onClick={deleteBook}>Delete</Button>{' '}
              <Button color="secondary" onClick={toggleDeleteModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

        {/*Delete Modal Success*/}
        <div>
          <Modal isOpen={deleteModalSuccess} toggle={toggleDeleteModalSuccess}>
            <ModalHeader toggle={toggleDeleteModalSuccess} className="border-0 smallTitle" charCode={<i class="fas fa-times-circle"></i>}></ModalHeader>
            <ModalBody style={{fontSize: "20px"}} className="text-center py-3">
            <div className="modal-icon"><i class="fas fa-chevron-circle-down"></i></div>
              The <b>{props.title}</b><br /> book successfully deleted!
            </ModalBody>
            <ModalFooter className="border-0">
              <Button color="secondary" onClick={toggleDeleteModalSuccess}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>

        {/*Update Modal*/}
        <div>
          <Modal isOpen={updateModal} toggle={toggleUpdateModal}>
            <ModalHeader toggle={toggleUpdateModal} className="border-0 smallTitle" charCode={<i class="fas fa-times-circle"></i>}>Update Book</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input type="text" name="title" id="title" placeholder="Book Title"/>
                </FormGroup>
                <FormGroup>
                  <Label for="author">Author</Label>
                  <Input type="select" name="author" id="author">
                    <option>Suzanne Colins</option>
                    <option>J.K. Rowling</option>
                    <option>Nelson Mandela</option>
                    <option>Plato</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="author">Genre</Label>
                  <Input type="select" name="author" id="author">
                    <option>Fiction</option>
                    <option>Biography</option>
                    <option>Classic</option>
                    <option>History</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="textarea" name="description" id="description" />
                </FormGroup>
                <FormGroup>
                  <Label for="image">Image</Label>
                  <Input type="file" name="image" id="image" />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter className="border-0">
              <Button color="danger" onClick={toggleUpdateModal}>Update</Button>{' '}
              <Button color="secondary" onClick={toggleUpdateModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

        {/*Borrow Modal*/}
        <div>
          <Modal isOpen={borrowModal} toggle={toggleBorrowModal}>
            <ModalHeader toggle={toggleBorrowModal} className="border-0 smallTitle" charCode={<i class="fas fa-times-circle"></i>}></ModalHeader>
            <ModalBody style={{fontSize: "20px"}} className="text-center py-3">
            <div className="modal-icon"><i class="fas fa-grin-beam"></i></div>
              The <b>{props.title}</b><br /> book successfully borrowed!
            </ModalBody>
            <ModalFooter className="border-0">
              <Button color="secondary" onClick={toggleBorrowModal}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>

      </>
    )
  }


export default DetailBook;