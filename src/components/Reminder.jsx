import React from "react";
import moment from "moment";
import { deleteReminder } from "../actions";
import { connect } from "react-redux";

const Reminder = props => {
  const { reminder } = props;

  function handleDelete() {
    props.deleteReminder(reminder.id);
  }

  return (
    <li className="list-group-item">
      <h6 className="float-left">
        <span className="badge badge-primary reminder-title">
          {reminder.title} {moment(new Date(reminder.due)).fromNow()}
        </span>
      </h6>
      <span
        style={{ cursor: "pointer" }}
        title="delete this reminder"
        className="float-right"
      >
        <i
          className="btn btn-success fa fa-check mark-as-complete"
          aria-hidden="true"
        ></i>
        <i
          onClick={handleDelete.bind(this)}
          className="btn btn-danger fa fa-trash-o"
          aria-hidden="true"
        ></i>
      </span>
    </li>
  );
};

export default connect(null, { deleteReminder })(Reminder);
