import React from 'react'
import DeleteAuthor from './Modals/DeleteAuthor';
import EditAuthor from './Modals/EditAuthor';
const Author = props => {
  return(
    <>
      <p>{props.name} <EditAuthor id={props.id} name={props.name} /> <DeleteAuthor id={props.id} /></p>
    </>
  )
}

export default Author