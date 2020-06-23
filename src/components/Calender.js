import React from "react";
import CalMap from "./CalMap";

export default class Calender extends React.Component {
  constructor() {
    super();

    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    let events = [];

    this.props.collections.map((collection) => {
      collection.todos.map((todo) => {
        events.push({
          startDate: todo.time.from.toISOString(),
          endDate: todo.time.to.toISOString(),
          title: todo.heading,
        });
      });
    });

    this.setState({
      events,
    });
  }

  render() {
    return <CalMap events={this.state.events} />;
  }
}
