import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todo extends Component {
  render() {
    const todoItems = this.props.collection.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
    return (
      <div className="todos">
        <div className="todos-title">
          <div className="input-text">
            {!this.props.collection.name.trim()
              ? "NoTitle"
              : this.props.collection.name}
          </div>
          <input
            type="text"
            name="todos-title"
            id="todos-title"
            placeholder="Collection Title"
            onChange={(event) =>
              this.props.handleChange(event, this.props.collection.id)
            }
            onBlur={(event) => {
              this.props.handleBlur(event, this.props.collection.id);
            }}
            value={this.props.collection.name}
          />
          <label htmlFor="todos-title">
            <span className="material-icons">edit</span>
          </label>
        </div>
        <div className="todo-grid">
          <div className="add">
            <span class="material-icons">add</span>
          </div>
          {todoItems}
        </div>
      </div>
    );
  }
}

export default Todo;
