import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import EditModal from "./components/EditModal";
import Logo from "./assets/images/logo.png";
import "./assets/css/styles.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading",
      },
      {
        id: 2,
        title: "workout",
      },
    ],
    isEdit: false,
    editData: {
      id: "",
      title: "",
    },
  };

  update = () => {
    const { id, title } = this.state.editData;
    const newData = { id, title };
    const newTodos = this.state.todos;
    newTodos.splice(id - 1, 1, newData);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
      },
    });
  };

  setTitle = (e) => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value,
      },
    });
  };

  deleteTask = (id) => {
    // console.log("delete ok");
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  };

  addTask = (data) => {
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data,
    };
    this.setState({
      todos: [...this.state.todos, newData],
    });
  };

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data,
      },
    });
  };

  closeModal = () => {
    this.setState({
      isEdit: false,
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={Logo} alt="" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              open={this.openModal}
            />
          ))}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />
      </div>
    );
  }
}
