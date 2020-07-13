const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false
}

const genre = (state = initialState, action) => {
  switch (action.type) {

    // GET genre
    case 'GET_GENRE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'GET_GENRE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'GET_GENRE_FULFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data
      }

    // POST genre
    case 'POST_GENRE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'POST_GENRE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'POST_GENRE_FULLFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }

    // PUT genre
    case 'PUT_GENRE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'PUT_GENRE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'PUT_GENRE_FULLFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }

    // DELETE genre
    case 'DELETE_GENRE_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      }
    case 'DELETE_GENRE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      }
    case 'DELETE_GENRE_FULLFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0]
      }
    default:
      return state
  }
}

export default genre;