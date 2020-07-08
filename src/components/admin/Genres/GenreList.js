import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Genre from './Genre';

const GenreList = () => {

  const [genre, setGenre] = useState([]);
  
  const getGenre = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/genre'
    })
    .then((res) => {
      setGenre(res.data.body)
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    getGenre()
  }, [])

  console.log(genre);

  return(
    <>
        <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
      {genre.map((genre) => {
        return <Genre key={genre.id} id={genre.id} name={genre.name} />
      })}
      </table>
    </>
  )
}

export default GenreList;