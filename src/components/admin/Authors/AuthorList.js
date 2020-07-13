import React, { useState, useEffect } from 'react';
// import Author from './Author';

import { getAuthor } from '../../../redux/actions/author';
import { connect } from 'react-redux';

import axios from 'axios';

const AuthorList = props => {

  //// GET DATA WITH REDUX STILL ERROR !!!!

  const [authorState, setAuthorState] = useState([]);

  // console.log("????")
  // console.log(props.author)

  const getAuthorData = () => {
    const token = props.auth.data.mainToken
    props.dispatch(getAuthor(token))
    .then(() => {
      setAuthorState(props.author.data)
    })
    .catch(err => {
      console.log(err)
    })
    axios({
      method: 'GET',
      url: 'http://localhost:3000/author'
    })
      .then((res) => {
        setAuthorState(res.data.body)
        // console.log("????")
        // console.log(res.data.body)      
      })
      .catch((err) => {
        console.log(err.response);
      })
  }

  useEffect(() => {
    getAuthorData()
  }, [])

console.log("????")
console.log(authorState)
console.log("????")

  return (
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
        {/* {authorState.map((author) => {
          return <Author key={author.id} id={author.id} name={author.name} />
        })} */}
      </table>

    </>
  )
}



const mapStateToProps = state => ({
  auth: state.auth,
  author: state.author
})

export default connect(mapStateToProps)(AuthorList)