import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";

export default combineReducers({
    HomeProps: HomeReducer
});