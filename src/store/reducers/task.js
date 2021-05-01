import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, EDIT_TASK_REQUEST, EDIT_TASK_SUCCESS, TASK_REQUEST, TASK_SUCCESS } from "../actions/types";

const initialState = {
  isLoading: false,
  todos: [],
  errors: null,
};

const task = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case TASK_REQUEST:
    case ADD_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
    case EDIT_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TASK_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
      };
    case DELETE_TASK_SUCCESS:
      return {
        isLoading: false,
        todos: state.todos.filter((item) => item._id !== action.id),
      };
    case ADD_TASK_SUCCESS:
      return {
        isLoading: false,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TASK_SUCCESS:
      const findTodos = state.todos.findIndex(
        (x) => x._id === action.payload._id
      );
      state.todos.splice(findTodos, 1, action.payload);
      return {
        isLoading: false,
        todos: state.todos,
      };
  }
};

export default task;
