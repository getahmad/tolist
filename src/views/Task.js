import React, { useEffect, useState,useContext } from "react";
import {AuthContext} from "../context/auth"
import FormInput from "../components/FormInput";
import TodoItem from "../components/TodoItem";
import EditModal from "../components/EditModal";
import Logo from "../assets/images/logo.png";
import "../assets/css/styles.css";
import axios from "axios";
import Button from "../components/Button";
const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1";

const Task = () => {
  const {logout}=useContext(AuthContext)
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    // title: "",
  });

  const update = () => {
    const { id, title } = editData;
    const newData = { id, title };
    const newTodos = todos;
    newTodos.splice(id - 1, 1, newData);
    setTodos(newTodos);
    setIsEdit(false);
    setEditData({
      id: "",
      title: "",
    });
  };

  const setTitle = (e) => {
    setEditData({
      ...editData,
      title: e.target.value,
    });
  };

  const openModal = (id, title) => {
    console.log(id,title);
    setIsEdit(true);
    setEditData({
      id,
      title: title,
    });
  };

  const closeModal = () => {
    setIsEdit(false);
  };

  const deleteTask = async (id) => {
    // setLoading(true);
    const token = localStorage.getItem("token");
    await axios.get(`${baseUrl}/todo/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    // setTodos(res.data);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    setTodos(todos.filter((item) => item._id !== id));
  };

  const addTask = (data) => {
    // const id = todos.length;
    // const newData = {
    //   id: id + 1,
    //   title: data,
    // };
    setTodos([...todos, data]);
  };

  const getData = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const res = await axios.get(`${baseUrl}/todo`, {
      headers: {
        Authorization: token,
      },
    });
    setTodos(res.data.todos);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <div className="logo">
        <img src={Logo} alt="" />
        <h3>Task List</h3>
        <Button variant="primary" text="logout" action={logout} />
      </div>
      <div className="list">
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            todo={item}
            del={deleteTask}
            open={openModal}
            loading={loading}
          />
        ))}
      </div>
      <div className="input-form">
        <FormInput add={addTask} />
      </div>
      <EditModal
        edit={isEdit}
        close={closeModal}
        change={setTitle}
        data={editData}
        update={update}
      />
    </div>
  );
};

export default Task;
