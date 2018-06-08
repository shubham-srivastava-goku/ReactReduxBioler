import { HOME_DATA } from "./types";

export const HomePageData = () => dispatch => {
    dispatch({
        type: HOME_DATA,
        payload: {"id" : "1"}
    }) 
};