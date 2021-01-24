import { combineReducers } from "redux";
import equipmentReducer from "./equipmentReducer";

export default combineReducers({
  equipmentData: equipmentReducer,  
});