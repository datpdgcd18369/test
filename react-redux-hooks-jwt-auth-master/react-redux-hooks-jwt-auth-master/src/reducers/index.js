import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import course from "./Course"

export default combineReducers({
  auth,
  message,
  course
});
