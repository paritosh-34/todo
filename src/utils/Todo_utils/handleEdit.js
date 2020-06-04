function trimSpaces(string) {
  return string
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");
  // .replace("<div><br></div>", "\n");
}

function handleEdit(event, id, property) {
  // Handles todos edits
  const { value } = event.target;
  const collection_id = this.state.collections.filter(
    (item) => item.active === true
  )[0].id;

  this.setState((prevState) => {
    const updatedCollections = prevState.collections.map((collection) => {
      if (collection.id === collection_id) {
        collection.todos.map((todo) => {
          if (todo.id === id) {
            if (property === "date") todo[property] = new Date(value);
            else if (property.slice(0, 4) === "time")
              todo.time[property.slice(4, -1)] = value;
            else todo[property] = trimSpaces(value);
          }
          return todo;
        });
      }
      return collection;
    });
    return updatedCollections;
  });
}
export default handleEdit;
