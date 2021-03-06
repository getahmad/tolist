import Button from "./Button";
import PropTypes from "prop-types";

const TodoItem = ({ todo, open,openModalDel }) => {

  return (
    <>
      <div style={todoItem}>
        <p>{todo.title}</p>
        <div>
          <Button
            text="edit"
            variant="success"
            action={() => open(todo._id, todo.title)}
          />
          <Button
            text="delete"
            variant="warning"
            action={() =>openModalDel(todo._id)}
          />
        </div>
      </div>
    </>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  // del: PropTypes.func.isRequired,
};

const todoItem = {
  background: "#2da8f8",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
