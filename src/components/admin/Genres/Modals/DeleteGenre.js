import React from 'react';
import { deleteGenre } from '../../../../redux/actions/genre';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

const DeleteGenre = props => {
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
        props.dispatch(deleteGenre(id, token))
        .then(() => {
          Swal.fire(
            'Deleted!',
            'The Genre successfully deleted!.',
            'success'
          )
          // CHANGE THIS LINE!!!
          setInterval(() => {
            window.location.replace("http://localhost:5000/admin/genres")
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
  genre: state.genre,
})

export default connect(mapStateToProps)(DeleteGenre)