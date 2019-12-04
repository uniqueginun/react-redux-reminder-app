import { combineReducers } from "redux";
import reminderReducer from "./reminder_reducer";

const allReducers = combineReducers({
  reminders: reminderReducer
});

export default allReducers;
