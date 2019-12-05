import {
  DELETE_REMINDER,
  ADD_REMINDER,
  MARK_REMINDER_DONE
} from "../constants";

export const addReminder = reminder => {
  reminder.id = Math.random();
  const action = {
    type: ADD_REMINDER,
    payload: reminder
  };
  return action;
};

export const deleteReminder = payload => {
  const action = {
    type: DELETE_REMINDER,
    payload
  };
  return action;
};

export const markDone = payload => {
  const action = {
    type: MARK_REMINDER_DONE,
    payload
  };
  return action;
};
