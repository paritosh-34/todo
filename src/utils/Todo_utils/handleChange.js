function handleChange(event, id) {
  // Handles the collection title change
  const { value } = event.target;
  this.setState((prevState) => {
    const updatedCollections = prevState.collections.map((collection) => {
      if (collection.id === id) collection.name = value;
      return collection;
    });
    return updatedCollections;
  });
}

export default handleChange;
