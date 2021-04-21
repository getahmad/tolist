export const getTask = () => {
  return {
    type: "TASK_REQUEST",
  };
};
export const delTask = (id) => {
  return {
    type: "DELETE_TASK_REQUEST",
    payload: id,
  };
};
export const addTask = (todo) => {
  return {
    type: "ADD_TASK_REQUEST",
    payload: todo,
  };
};

export const editTask = (todo) => {
  return {
    type: "EDIT_TASK_REQUEST",
    payload: todo,
  };
};
