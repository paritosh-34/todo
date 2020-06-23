export default function changeColor(event, id) {
  const newColor = event.target.value;

  this.setState((prevState) => {
    const updatedCollections = prevState.collections.map((collection) => {
      if (collection.id === id) collection.color = newColor;
      return collection;
    });
    return updatedCollections;
  });
}
