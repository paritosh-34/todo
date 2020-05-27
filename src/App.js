import React, { Component } from "react";
import Todo from "./components/Todo";
import Context from "./components/Context";
// import Calender from "./components/Calender";
import todosData from "./Data";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();

    const tds = todosData.collections.map((collection) => {
      collection.active = false;
      return collection;
    });
    tds[0].active = true;

    this.state = {
      collections: tds,
    };

    this.changeCollection = this.changeCollection.bind(this);
  }

  changeCollection(id) {
    console.log(id);

    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.active) collection.active = false;
        if (collection.id === id) collection.active = true;
        return collection;
      });

      return updatedCollections;
    });
  }
  render() {
    return (
      <div className="App">
        <Context
          collections={this.state.collections}
          changeCollection={this.changeCollection}
        />
        <Todo
          collection={
            this.state.collections.filter((item) => item.active === true)[0]
          }
        />
      </div>
    );
  }
}

export default App;
