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
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  changeCollection(id) {
    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.active) collection.active = false;
        if (collection.id === id) collection.active = true;
        return collection;
      });

      return updatedCollections;
    });
  }

  handleChange(event, id) {
    const { value } = event.target;
    this.setState((prevState) => {
      const updatedCollections = prevState.collections.map((collection) => {
        if (collection.id === id) collection.name = value;
        return collection;
      });
      return updatedCollections;
    });
  }

  handleBlur(event, id) {
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
          handleChange={this.handleChange}
          handleBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default App;
