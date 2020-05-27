import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todo extends Component {
  render() {
    const todoItems = this.props.collection.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));

    return (
      <div className="todos">
        <h1>{this.props.collection.name}</h1>
        <div className="todo-grid">{todoItems}</div>
      </div>
    );
  }
}

export default Todo;
