import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <h3 className="todo-heading">{this.props.todo.heading}</h3>
        <p className="todo-desc" ref={(element) => (this.divRef = element)}>
          {this.props.todo.desc}
        </p>
        <div className="todo-date-time-wrapper">
          <div className="todo-date">
            {this.props.todo.date.toLocaleDateString()}
          </div>
          <div className="todo-time">
            {this.props.todo.time.from.toLocaleTimeString().slice(0, 5)} -{" "}
            {this.props.todo.time.to.toLocaleTimeString().slice(0, 5)}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
