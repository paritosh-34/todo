import React, { Component } from "react";

class Context extends Component {
  render() {
    const mylist = this.props.collections.map((collection) => {
      const styling = { backgroundColor: collection.color };
      return (
        <li
          className="collection-list"
          style={collection.active ? styling : null}
          onClick={() => this.props.changeCollection(collection.id)}
          key={"collection-list-" + collection.id}
        >
          <button title={collection.name}>
            <span key={"identifier-" + collection.id} className="identifier">
              {collection.name[0] ? collection.name[0] : "---"}
            </span>
            <span key={collection.id} className="collection">
              {collection.name ? collection.name : "---"}
            </span>
          </button>
        </li>
      );
    });

    return (
      <div className="context">
        <div className="heading">
          <div className="menu">
            <i className="material-icons" style={{ fontSize: "2em" }}>
              menu
            </i>
          </div>

          <div className="logo">To-Do</div>
        </div>

        <ul>
          <li className="collection-list" id="add">
            <button onClick={this.props.addCollection}>
              <span className="material-icons">add</span>
            </button>
          </li>
          {mylist}
        </ul>
      </div>
    );
  }
}

export default Context;
