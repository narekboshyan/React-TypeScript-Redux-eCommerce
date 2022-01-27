import {
    LoginAction,
    RegisterAction,
    UserDetailsAction,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import { initialLoginState, initialRegisterState, initialUserDetailsState } from "./initialStates";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../constants/userConstants";

// ^  LoginReducer
export const userLoginReducer = (
    state = initialLoginState,
    action: LoginAction
) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

// ^  RegisterReducer
export const userRegisterReducer = (
    state = initialRegisterState,
    action: RegisterAction
) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// ^ UserDetailsReducer
export const userDetailsReducer = (
    state = initialUserDetailsState,
    action: UserDetailsAction
) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { loading: true };
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
