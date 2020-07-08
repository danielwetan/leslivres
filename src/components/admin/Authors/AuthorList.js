import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Author from './Author';

const AuthorList = () => {

  const [author, setAuthor] = useState([]);
  
  const getAuthor = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/author'
    })
    .then((res) => {
      setAuthor(res.data.body)
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    getAuthor()
  }, [])

  console.log(author);

  return(
    <>
      {author.map((author) => {
        return <Author key={author.id} id={author.id} name={author.name} />
      })}
    </>
  )
}

export default AuthorList;