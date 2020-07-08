import React from 'react';
import axios from 'axios';
import EditBook from './Modals/EditBook';
import DeleteBook from './Modals/DeleteBook';

const Book = props => {
  return(
    <>
      <p>
        {props.title}
        <EditBook id={props.id} title={props.title} author={props.author} genre={props.genre} description={props.description} image={props.image} status={props.status} />
        <DeleteBook id={props.id} />
      </p>     
    </> 
  )
}

export default Book;