import React from 'react'
import DeleteAuthor from './Modals/DeleteAuthor';
import EditAuthor from './Modals/EditAuthor';
const Author = props => {
  return(
    <>
        <tbody>
          <tr>
            <th scope="row">{props.id}</th>
            <th>{props.name}</th>
            <th><EditAuthor id={props.id} name={props.name} /></th>
            <th> <DeleteAuthor id={props.id} /></th>
          </tr>
        </tbody>
    </>
  )
}

export default Author