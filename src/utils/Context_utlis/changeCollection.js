function changeCollection(id) {
  // This Funtion is to change collections
  this.setState((prevState) => {
    const updatedCollections = prevState.collections.map((collection) => {
      if (collection.active) collection.active = false;
      if (collection.id === id) collection.active = true;
      return collection;
    });

    return updatedCollections;
  });
}

export default changeCollection;
