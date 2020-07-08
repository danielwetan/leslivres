import React from 'react'
import DeleteGenre from './Modals/DeleteGenre';
import EditGenre from './Modals/EditGenre';
const Genre = props => {
  return(
    <>
      <p>{props.name} <EditGenre id={props.id} name={props.name} /> <DeleteGenre id={props.id} /></p>
    </>
  )
}

export default Genre