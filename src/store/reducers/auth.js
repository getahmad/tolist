const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "AUTH_REQUEST":
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
  }
};

export default auth;
