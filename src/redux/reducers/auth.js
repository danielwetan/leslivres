const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: {}
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case 'LOGIN_FULFILLED':
      console.log(action.payload.data.body[0]);
      
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.body[0]
      }
    default: 
      return state;
  }
}

export default auth;