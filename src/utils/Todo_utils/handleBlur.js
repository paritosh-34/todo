function handleBlur(event, id) {
  // Handles the collection title change on Blur
  const { value } = event.target;
  if (!value) {
    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.id === id) collection.name = "null";
        return collection;
      });
      return updatedCollections;
    });
  }
}

export default handleBlur;
