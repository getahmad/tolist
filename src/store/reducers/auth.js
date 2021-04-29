const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "LOGIN" :
    case "REGISTER":
    return {
        ...state,
        isLoading: true,
      };
    case "AUTH_SUCCESS":
      return {
        isAuthenticated: true,
        isLoading: false,
        errors: null,
      };
    case "AUTH_FAILED":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errors: action.payload,
      };
    case "AUTH_REMOVE_ERRORS":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        errors: null,
      };
    case "LOGOUT":
      return{
        isAuthenticated:false,
      }
  }
};

export default auth;
