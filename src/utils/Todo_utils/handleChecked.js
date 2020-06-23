export default function handleChecked(event, collection_id, id) {
  const newValue = event.target.checked;

  console.log(newValue, collection_id, id);

  this.setState((prevState) => {
    const updatedCollections = prevState.collections.map((collection) => {
      if (collection.id === collection_id) {
        const newTodos = collection.todos.map((todo) => {
          if (todo.id === id) todo.completed = newValue;
          return todo;
        });
        collection.todos = newTodos;
      }
      return collection;
    });
    return updatedCollections;
  });
}
