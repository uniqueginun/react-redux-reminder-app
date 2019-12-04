import React, { Component } from "react";
import Reminder from "./Reminder";
import { connect } from "react-redux";
import { addReminder } from "../actions";

class RemindersList extends Component {
  renderReminders = () => {
    const { reminders } = this.props;
    if (reminders.length > 0) {
      return reminders.map(reminder => (
        <Reminder key={reminder.id} reminder={reminder} />
      ));
    } else {
      return (
        <p style={{ margin: "1rem" }} className="text-center text-danger">
          No reminders were found
        </p>
      );
    }
  };

  render() {
    return (
      <div
        style={{ fontFamily: "Mukta" }}
        className="row justify-content-center my-3"
      >
        <div className="card">
          <ul className="list-group">{this.renderReminders()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { addReminder })(RemindersList);
