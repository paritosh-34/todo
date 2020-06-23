import React, { Component } from "react";
import ContentEditable from "react-contenteditable";

class TodoItem extends Component {
  pasteAsPlainText = (event) => {
    event.preventDefault();

    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  };

  componentDidMount = () =>
    this.props.todo.ref ? this.props.todo.ref.current.focus() : null;

  handleEnter = (event) => (event.keyCode === 13 ? event.target.blur() : null);

  render() {
    const completedStyleTodoItem = {
      backgroundColor: this.props.color,
      color: "white",
    };
    const completedStyleTodoTime = {
      backgroundColor: "inherit",
      color: "whitesmoke",
      outline: "none",
    };
    return (
      <div
        className="todo-item"
        style={this.props.todo.completed ? completedStyleTodoItem : null}
      >
        <div className="todo-heading-desc-wrapper">
          <div className="todo-heading-wrapper">
            <ContentEditable
              html={this.props.todo.heading}
              disabled={false}
              onPaste={this.pasteAsPlainText}
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "heading")
              }
              tagName="h3"
              className="todo-heading"
              placeholder="Title"
              innerRef={this.props.todo.ref}
            />

            <div className="checker">
              <span
                className="material-icons"
                style={{ color: this.props.todo.completed ? "white" : "red" }}
                onClick={() => {
                  this.props.deleteTodo(
                    this.props.collection_id,
                    this.props.todo.id
                  );
                }}
              >
                delete
              </span>
              <input
                type="checkbox"
                name="isCompleted"
                checked={this.props.todo.completed}
                onChange={(event) => {
                  this.props.handleChecked(
                    event,
                    this.props.collection_id,
                    this.props.todo.id
                  );
                }}
              />
            </div>
          </div>

          <ContentEditable
            html={this.props.todo.desc}
            disabled={false}
            onPaste={this.pasteAsPlainText}
            onChange={(event) =>
              this.props.handleEdit(event, this.props.todo.id, "desc")
            }
            tagName="p"
            className="todo-desc"
            placeholder="----"
          />
        </div>

        <div className="todo-date-time-wrapper">
          <div className="todo-date">
            <input
              type="date"
              name="todo-date"
              value={this.props.todo.date.toISOString().substr(0, 10)}
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "date")
              }
            />
          </div>

          <div
            className="todo-time"
            style={this.props.todo.completed ? completedStyleTodoTime : null}
          >
            <input
              type="text"
              value={this.props.todo.time.from}
              className="todo-time-editable"
              placeholder="hh:mm"
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "timefrom ")
              }
              onKeyDown={(event) => {
                console.log(event.target.value.length);
                event.target.style.width = event.target.value.length + "ch";
                this.handleEnter(event);
              }}
              style={
                this.props.todo.completed
                  ? completedStyleTodoTime
                  : { outline: "none" }
              }
            />
            -{" "}
            <input
              type="text"
              value={this.props.todo.time.to}
              className="todo-time-editable"
              placeholder="hh:mm"
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "timeto ")
              }
              onKeyDown={(event) => {
                console.log(event.target.value.length);
                event.target.style.width = event.target.value.length + "ch";
                this.handleEnter(event);
              }}
              style={
                this.props.todo.completed
                  ? completedStyleTodoTime
                  : { outline: "none" }
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
