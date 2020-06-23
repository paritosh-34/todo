import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

export default class CalMap extends React.Component {
  render() {
    console.log(this.props.events);
    return (
      <div className="calender">
        <div>
          <h1>Calender is here</h1>
          <Paper>
            <Scheduler data={this.props.events}>
              <ViewState currentDate={"2020-06-20"} />
              <DayView />
              <Appointments />
            </Scheduler>
          </Paper>
        </div>
      </div>
    );
  }
}
