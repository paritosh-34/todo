import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todo extends Component {
  render() {
    const todoItems = this.props.collection.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleEdit={this.props.handleEdit}
        firstEditable={this.props.firstEditable}
        color={this.props.collection.color}
        handleChecked={this.props.handleChecked}
        collection_id={this.props.collection.id}
        deleteTodo={this.props.deleteTodo}
      />
    ));
    return (
      <div className="todos">
        <div className="todos-title">
          <div className="color-picker">
            <span
              className="material-icons"
              style={{ color: this.props.collection.color }}
            >
              palette
            </span>
            <input
              type="color"
              value={this.props.collection.color}
              onChange={(event) => {
                this.props.changeColor(event, this.props.collection.id);
              }}
            />
          </div>
          <input
            type="text"
            name="todos-title"
            id="todos-title"
            placeholder="Collection Title"
            onChange={(event) =>
              this.props.handleChange(event, this.props.collection.id)
            }
            // onBlur={(event) => {
            //   this.props.handleBlur(event, this.props.collection.id);
            // }}
            value={this.props.collection.name}
            ref={this.props.collection.ref}
          />
          <div className="bottom-line"></div>
          <label htmlFor="todos-title" className="edit">
            <span className="material-icons">edit</span>
          </label>
          <div className="done">
            <span className="material-icons">done</span>
          </div>
        </div>
        <div className="todo-grid">
          <div
            className="add"
            onClick={(event) =>
              this.props.handleAdd(event, this.props.collection.id)
            }
          >
            <span className="material-icons">add</span>
          </div>
          {todoItems}
        </div>
      </div>
    );
  }
}

export default Todo;
