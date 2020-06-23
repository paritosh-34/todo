import React, { Component } from "react";
import axios from "axios";
import Todo from "./components/Todo";
import Context from "./components/Context";
import Calender from "./components/Calender";

import {
  changeCollection,
  addCollection,
  handleAdd,
  handleChange,
  handleEdit,
  handleBlur,
} from "./utils";

import todosData from "./Data";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();

    axios
      .post(`http://localhost:5000/todos`, todosData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    const tds = todosData.collections.map((collection) => {
      collection.active = false;

      // collection.todos.map((todo) => {
      //   todo.time.from = todo.time.from.toLocaleTimeString([], {
      //     hour: "2-digit",
      //     minute: "2-digit",
      //   });
      //   todo.time.to = todo.time.to.toLocaleTimeString([], {
      //     hour: "2-digit",
      //     minute: "2-digit",
      //   });
      //   return todo;
      // });

      return collection;
    });
    tds[0].active = true;

    this.state = {
      collections: tds,
    };

    this.changeCollection = changeCollection.bind(this);
    this.addCollection = addCollection.bind(this);
    this.handleAdd = handleAdd.bind(this);
    this.handleBlur = handleBlur.bind(this);
    this.handleChange = handleChange.bind(this);
    this.handleEdit = handleEdit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Context
          collections={this.state.collections}
          changeCollection={this.changeCollection}
          addCollection={this.addCollection}
        />
        <Todo
          collection={
            this.state.collections.filter((item) => item.active === true)[0]
          }
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
          handleEdit={this.handleEdit}
          handleAdd={this.handleAdd}
          firstEditable={this.firstEditable}
        />
        <Calender collections={this.state.collections} />
      </div>
    );
  }
}

export default App;
