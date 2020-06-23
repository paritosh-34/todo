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

          {/* <ContentEditable
            html={this.props.todo.desc}
            disabled={false}
            onPaste={this.pasteAsPlainText}
            onChange={(event) =>
              this.props.handleEdit(event, this.props.todo.id, "desc")
            }
            tagName="p"
            className="todo-desc"
            placeholder="----"
          /> */}
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

          <div className="todo-time">
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
            />{" "}
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
