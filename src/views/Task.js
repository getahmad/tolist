import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import TodoItem from "../components/TodoItem";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import Logo from "../assets/images/logo.png";
import "../assets/css/styles.css";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getTask, delTask, editTask } from "../store/actions/task";
import SkeletonLoading from "../components/SkeletonLoading";
import { logout } from "../store/actions/auth";

const Task = () => {
  const { todos, isLoading } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [modalEdit, setModalEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
  });
  const [modalDelete,setModalDelete] = useState(false)
  const [delData,setDelData]=useState({
    id:""
  })

  const openModalEdit = (id, title) => {
    setModalEdit(true);
    setEditData({
      id,
      title: title,
    });
  };

  const setTitle = (e) => {
    setEditData({
      ...editData,
      title: e.target.value,
    });
  };

  const update = (e) => {
    e.preventDefault();
    const { id, title } = editData;
    const data = {
      id,
      title: title,
    };
    if (title !== "") {
      dispatch(editTask(data));
    }
    setModalEdit(false);
  };

  const closeModalEdit = () => {
    setModalEdit(false);
  };

  const openModalDelete = (id) => {
    setModalDelete(true);
    setDelData({id})
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  }


  const deleteTask = () => {
    dispatch(delTask(delData.id));
    setModalDelete(false);
  };

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <div className="app">
      <div className="logo">
        <img src={Logo} alt="" />
        <h3>Task List</h3>
        <Button variant="primary" text="logout" action={logoutUser} />
      </div>
      <div className="list">
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          <>
            {todos.map((item, index) => (
              <TodoItem
                key={index}
                todo={item}
                // del={deleteTask}
                openModalDel={openModalDelete}
                open={openModalEdit}
              />
            ))}
          </>
        )}
      </div>
      <div className="input-form">
        <FormInput />
      </div>
      <EditModal
        edit={modalEdit}
        close={closeModalEdit}
        change={setTitle}
        data={editData}
        update={update}
      />
      <DeleteModal
      close={closeModalDelete}
      del={deleteTask}
      delDataTodo={modalDelete}
      />
    </div>
  );
};

export default Task;
