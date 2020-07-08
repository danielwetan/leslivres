import React from 'react';
import axios from 'axios';
import EditBook from './Modals/EditBook';
import DeleteBook from './Modals/DeleteBook';

const Book = props => {
  return(
    <>
        <tbody>
          <tr>
            <th scope="row">{props.id}</th>
            <th>{props.title}</th>
            <th>{props.author}</th>
            <th>{props.genre}</th>
            <th><span class="badge bg-lightgray admin-book-status">{props.status}</span></th>
            <th><EditBook id={props.id} title={props.title} author={props.author} genre={props.genre} description={props.description} image={props.image} status={props.status} /></th>
            <th><DeleteBook id={props.id} /></th>
          </tr>
        </tbody>  
    </> 
  )
}

export default Book;