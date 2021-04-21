import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import TodoItem from "../components/TodoItem";
import EditModal from "../components/EditModal";
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

  const openModal = (id, title) => {
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

  const closeModal = () => {
    setModalEdit(false);
  };

  const deleteTask = (id) => {
    dispatch(delTask(id));
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
                del={deleteTask}
                open={openModal}
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
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      />
    </div>
  );
};

export default Task;
