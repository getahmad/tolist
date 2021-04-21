import Button from "./Button";
import "../assets/css/EditModal.css";
// import { useDispatch } from "react-redux";

const EditModal = ({ edit, close, data, change, update }) => {
  //  const dispatch=useDispatch()

  if (edit) {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>edit task</h3>
          <div className="input">
            <input type="text" value={data.title} onChange={change} required />
          </div>
          <div className="btn-group">
            <Button text="Oke" variant="primary" action={update} />
            <Button text="cancel" variant="warning" action={close} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EditModal;
