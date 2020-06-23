import React from "react";

const colors = ["#5d26ca", "#f5a92f", "#f45c33", "#43c8dd"];

export default function addCollection() {
  const newFocus = React.createRef();
  const num = this.state.collections.length;
  const newCollection = {
    id: num + 1,
    name: "",
    color: colors[num % 4],
    ref: newFocus,
    todos: [],
  };
  this.setState({
    collections: [...this.state.collections, newCollection],
  });
  this.changeCollection(num + 1);
}
