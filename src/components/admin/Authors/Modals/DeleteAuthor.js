import React from 'react';
import { deleteAuthor } from '../../../../redux/actions/author';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const DeleteAuthor = props => {
  /// DELETE STILL ERROR !
  const submitDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Data will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButonColor: '#3085d6',
      cancelButtonColor: '#dd',
      confirmButtonText: 'Yes'
    })
    .then((result) => {
      if(result.value) {
        const token = props.auth.data.mainToken
        props.dispatch(deleteAuthor(id, token))
        .then(() => {
          Swal.fire(
            'Deleted!',
            'The Author successfully deleted!.',
            'success'
          )
          // CHANGE THIS LINE!!!
          setInterval(() => {
            window.location.replace(process.env.REACT_APP_PUBLIC_URL + "admin/authors")
          }, 2000)
        })
        .catch((err) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Something error!'
          })
        })
      }
    })
  }

  return (
    <>
      <span onClick={(() => submitDelete(props.id))} className="book-edit btn bg-white"><i class="fas fa-trash"></i></span>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
  author: state.author,
})

export default connect(mapStateToProps)(DeleteAuthor)