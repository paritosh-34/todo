import React from "react";

export default function handleAdd(event, id) {
  // To add another Todo
  const newFocus = React.createRef();

  const collectiontodos = this.state.collections.filter(
    (collection) => collection.id === id
  )[0];

  const lastID = collectiontodos.todos[collectiontodos.todos.length - 1].id;

  const newTodo = {
    id: lastID + 1,
    heading: "",
    desc: "",
    date: new Date(),
    time: {
      from: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      to: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
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
