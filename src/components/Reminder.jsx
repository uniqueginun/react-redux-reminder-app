import React from "react";
import moment from "moment";
import { deleteReminder, markDone } from "../actions";
import { connect } from "react-redux";

const Reminder = props => {
  const { reminder } = props;

  function handleDelete() {
    props.deleteReminder(reminder.id);
  }

  function markDone() {
    props.markDone(reminder.id);
  }

  const style = () => {
    let str = "badge reminder-title";
    str += reminder.done ? " badge-info" : " badge-secondary";
    return str;
  };

  const doneButtonClass = () => {
    let str = "btn btn-success fa mark-as-complete";
    str += reminder.done ? " fa-check" : " fa-repeat";
    return str;
  };

  return (
    <li className="list-group-item">
      <h6 className="float-left">
        <span className={style()}>
          {reminder.title} {moment(new Date(reminder.due)).fromNow()}
        </span>
      </h6>
      <span
        style={{ cursor: "pointer" }}
        title="toggle status for this reminder"
        className="float-right"
      >
        <i
          className={doneButtonClass()}
          aria-hidden="true"
          onClick={markDone.bind(this)}
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

export default connect(null, { deleteReminder, markDone })(Reminder);
