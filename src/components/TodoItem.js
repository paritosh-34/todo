import React, { Component } from "react";
import ContentEditable from "react-contenteditable";

class TodoItem extends Component {
  constructor() {
    super();

    this.state = {
      opened: false,
    };
  }

  open = () => {
    this.setState({
      opened: true,
    });
  };

  close = () => {
    this.setState({
      opened: false,
    });
  };

  check = () => {
    console.log("check");
  };

  pasteAsPlainText = (event) => {
    event.preventDefault();

    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  };

  render() {
    return (
      <div
        className={
          this.state.opened ? "active-wrapper active" : "active-wrapper"
        }
      >
        <div className="block" onClick={this.open}></div>
        <div className="todo-item">
          <div className="todo-heading-desc-wrapper">
            <ContentEditable
              html={this.props.todo.heading}
              disabled={false}
              onPaste={this.pasteAsPlainText}
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "heading")
              }
              tagName="h3"
              className="todo-heading"
            />

            <ContentEditable
              html={this.props.todo.desc}
              disabled={false}
              onPaste={this.pasteAsPlainText}
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "desc")
              }
              tagName="p"
              className="todo-desc"
            />
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
        <div className="close" onClick={this.close}>
          <span className="material-icons">close</span>
        </div>
      </div>
    );
  }
}

export default TodoItem;
