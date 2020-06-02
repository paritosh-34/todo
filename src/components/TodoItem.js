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

  render() {
    // console.log(this.props.todo.heading ? null : this.current.focus());
    return (
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
            placeholder="Title"
            innerRef={this.props.todo.ref}
          />

          <ContentEditable
            html={this.props.todo.desc ? this.props.todo.desc : " "}
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
            <input
              type="date"
              name="todo-date"
              id="todo-date"
              value={this.props.todo.date.toISOString().substr(0, 10)}
              onChange={(event) =>
                this.props.handleEdit(event, this.props.todo.id, "date")
              }
            />
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
