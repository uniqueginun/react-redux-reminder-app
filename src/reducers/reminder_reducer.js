import {
  DELETE_REMINDER,
  ADD_REMINDER,
  MARK_REMINDER_DONE
} from "../constants";
import { bake_cookie, read_cookie } from "sfcookies";

export default function reminderReducer(state = [], action) {
  const { type, payload } = action;
  state = read_cookie("reminders");
  switch (type) {
    case ADD_REMINDER:
      const newState = [...state, payload];
      bake_cookie("reminders", newState);
      return newState;
    case DELETE_REMINDER:
      const newUpdatedState = [...state].filter(item => item.id !== payload);
      bake_cookie("reminders", newUpdatedState);
      return newUpdatedState;
    case MARK_REMINDER_DONE:
      const newStateWithMarked = [...state].map(item => {
        if (item.id === payload) {
          item.done = !item.done;
        }
        return item;
      });
      bake_cookie("reminders", newStateWithMarked);
      return newStateWithMarked;
    default:
      return state;
  }
}
