import axios from 'axios';

const getBookDetail = (id) => {
  return {
    type: "GET_BOOK_DETAIL",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + `book/${id}`
    })
  }
}

const createBook = (formData, token) => {
  return {
    type: "CREATE_BOOK",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + 'book/',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token
      }
    })
  }
}

const updateBook = (id, formData, token) => {
  return {
    type: "UPDATE_BOOK",
    payload: axios({
      method: "PUT",
      url: process.env.REACT_APP_API_URL + `book/${id}`,
      data: formData,
      headers: {
        Authorization: token
      }
    })
  }
}

const deleteBook = id => {
  return {
    type: "DELETE_BOOK",
    payload: axios({
      method: "DELETE",
      url: process.env.REACT_APP_API_URL + `book/${id}`,
      headers: {
        Authorization: token
      }
    })
  }
}

export {
  getBookDetail,
  createBook,
  updateBook,
  deleteBook
}