import React from 'react'
import DeleteGenre from './Modals/DeleteGenre';
import EditGenre from './Modals/EditGenre';
const Genre = props => {
  return(
    <>
        <tbody>
          <tr>
            <th scope="row">{props.id}</th>
            <th>{props.name}</th>
            <th><EditGenre id={props.id} name={props.name} /></th>
            <th> <DeleteGenre id={props.id} /></th>
          </tr>
        </tbody>    
    </>
  )
}

export default Genre