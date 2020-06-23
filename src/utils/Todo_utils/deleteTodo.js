export default function deleteTodo(collection_id, id) {
  this.setState((prevState) => {
    const updateCollections = prevState.collections.map((collection) => {
      if (collection.id === collection_id) {
        const newTodos = collection.todos.filter((todo) => todo.id !== id);
        collection.todos = newTodos;
      }
      return collection;
    });
    return updateCollections;
  });
}
