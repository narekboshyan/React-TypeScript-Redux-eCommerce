import {  UserAction } from "../constants/userConstants";
import { initialUserState } from "./initialStates";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginReducer = (
    state = initialUserState,
    action: UserAction
) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { ...state, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};
