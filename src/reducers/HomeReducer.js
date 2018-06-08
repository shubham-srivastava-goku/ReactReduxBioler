import { HOME_DATA } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case HOME_DATA:
            return {
                ...state,
                HomeData: action.payload
            };
        default:
            return state;
    }
}