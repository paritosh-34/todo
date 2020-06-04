import React, { Component } from "react";
import Todo from "./components/Todo";
import Context from "./components/Context";
// import Calender from "./components/Calender";
import todosData from "./Data";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();

    const tds = todosData.collections.map((collection) => {
      collection.active = false;

      collection.todos.map((todo) => {
        todo.time.from = todo.time.from.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        todo.time.to = todo.time.to.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        return todo;
      });

      return collection;
    });
    tds[0].active = true;

    this.state = {
      collections: tds,
    };
  }

  changeCollection = (id) => {
    // This Funtion is to change collections
    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.active) collection.active = false;
        if (collection.id === id) collection.active = true;
        return collection;
      });

      return updatedCollections;
    });
  };

  handleChange = (event, id) => {
    // Handles the collection title change
    const { value } = event.target;
    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.id === id) collection.name = value;
        return collection;
      });
      return updatedCollections;
    });
  };

  handleBlur = (event, id) => {
    // Handles the collection title change on Blur
    const { value } = event.target;
    if (!value) {
      this.setState((prevState) => {
        const updatedCollections = prevState.collections.map((collection) => {
          if (collection.id === id) collection.name = "null";
          return collection;
        });
        return updatedCollections;
      });
    }
  };

  trimSpaces = (string) => {
    return string
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<");
    // .replace("<div><br></div>", "\n");
  };

  handleEdit = (event, id, property) => {
    // Handles todos edits
    const { value } = event.target;
    const collection_id = this.state.collections.filter(
      (item) => item.active === true
    )[0].id;

    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.id === collection_id) {
          collection.todos.map((todo) => {
            if (todo.id === id) {
              if (property === "date") todo[property] = new Date(value);
              else if (property.slice(0, 4) === "time")
                todo.time[property.slice(4, -1)] = value;
              else todo[property] = this.trimSpaces(value);
            }
            return todo;
          });
        }
        return collection;
      });
      return updatedCollections;
    });
  };

  handleAdd = (event, id) => {
    // To add another Todo
    const newFocus = React.createRef();

    const collectiontodos = this.state.collections.filter(
      (collection) => collection.id === id
    )[0];

    const newTodo = {
      id: collectiontodos.todos.length + 1,
      heading: "",
      desc: "",
      date: new Date(),
      time: {
        from: new Date(),
        to: new Date(),
      },
      completed: false,
      ref: newFocus,
    };
    const tfg = [...collectiontodos.todos, newTodo];

    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.id === id) {
          collection.todos = tfg;
        }
        return collection;
      });
      return updatedCollections;
    });
  };

  render() {
    return (
      <div className="App">
        <Context
          collections={this.state.collections}
          changeCollection={this.changeCollection}
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
      </div>
    );
  }
}

export default App;
