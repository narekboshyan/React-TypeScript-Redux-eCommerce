export enum UserTypes {
    USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
    USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
    USER_LOGOUT = "USER_LOGOUT",

    USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST",
    USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS",
    USER_REGISTER_FAIL = "USER_REGISTER_FAIL",

    USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST",
    USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS",
    USER_DETAILS_FAIL = "USER_DETAILS_FAIL",
}

export const {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
} = UserTypes;

interface LoginA {
    type: typeof USER_LOGIN_REQUEST;
}

interface LoginB {
    type: typeof USER_LOGIN_SUCCESS;
    payload: {
        email: string;
        isAdmin: boolean;
        name: string;
        token: string;
        _id: string;
    };
}
interface LoginC {
    type: typeof USER_LOGIN_FAIL;
    payload: string | null;
}
interface LoginD {
    type: typeof USER_LOGOUT;
}

export type LoginAction = LoginA | LoginB | LoginC | LoginD;

export interface UserLoginI {
    loading: boolean;
    userInfo: null;
    error: null;
}

// ! Register

interface RegisterA {
    type: typeof USER_REGISTER_REQUEST;
}

interface RegisterB {
    type: typeof USER_REGISTER_SUCCESS;
    payload: {
        email: string;
        isAdmin: boolean;
        name: string;
        token: string;
        _id: string;
    };
}
interface RegisterC {
    type: typeof USER_REGISTER_FAIL;
    payload: string | null;
}

export type RegisterAction = RegisterA | RegisterB | RegisterC | LoginB;

export interface UserRegisterI {
    loading: boolean;
    userInfo: null | {
        email: string;
        isAdmin: boolean;
        name: string;
        token: string;
        _id: string;
    };
    error: null;
}

// ! UserDetails

interface UserDetailsRequest {
    type: typeof USER_DETAILS_REQUEST;
}

interface UserDetailsSuccess {
    type: typeof USER_DETAILS_SUCCESS;
    payload: {
        email: string;
        isAdmin: boolean;
        name: string;
        token: string;
        _id: string;
    };
}
interface UserDetailsFail {
    type: typeof USER_DETAILS_FAIL;
    payload: string | null;
}

export type UserDetailsAction =
    | UserDetailsRequest
    | UserDetailsSuccess
    | UserDetailsFail;

export interface UserDetailsI {
    loading: boolean;
    user: null | {
        email: string;
        isAdmin: boolean;
        name: string;
        token: string;
        _id: string;
    };
    error: null;
}
