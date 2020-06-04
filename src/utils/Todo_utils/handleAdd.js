import React from "react";

function handleAdd(event, id) {
  // To add another Todo
  const newFocus = React.createRef();

  const collectiontodos = this.state.collections.filter(
    (collection) => collection.id === id
  )[0];

  const newTodo = {
    id: collectiontodos.todos.length + 1,
    heading: "",
    desc: "",
    date: new Date(),
    time: {
      from: new Date(),
      to: new Date(),
    },
    completed: false,
    ref: newFocus,
  };
  const tfg = [...collectiontodos.todos, newTodo];

  this.setState((prevState) => {
    const updatedCollections = prevState.collections.map((collection) => {
      if (collection.id === id) {
        collection.todos = tfg;
      }
      return collection;
    });
    return updatedCollections;
  });
}

export default handleAdd;
