import Button from "./Button";
import "../assets/css/EditModal.css";

const DeleteModal = ({ delDataTodo, close,del }) => {

  if (delDataTodo) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Delete task</h3>
          <div className="btn-group" style={{ marginTop:"2rem"}}>
            <Button text="yes" variant="primary" action={del} />
            <Button text="cancel" variant="warning" action={close} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DeleteModal;
