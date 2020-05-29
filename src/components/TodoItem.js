import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <div className="todo-heading-desc-wrapper">
          <h3 className="todo-heading">{this.props.todo.heading}</h3>
          <p className="todo-desc" ref={(element) => (this.divRef = element)}>
            {this.props.todo.desc}
          </p>
        </div>
        <div className="todo-date-time-wrapper">
          <div className="todo-date">
            {this.props.todo.date.toLocaleDateString()}
          </div>
          <div className="todo-time">
            {this.props.todo.time.from.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {this.props.todo.time.to.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
