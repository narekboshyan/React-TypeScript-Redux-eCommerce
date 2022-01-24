export enum UserTypes {
    USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
    USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL = "USER_LOGIN_FAIL",
    USER_LOGOUT = "USER_LOGOUT",
}

export const {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} = UserTypes;

interface UserA {
    type: typeof USER_LOGIN_REQUEST;
}

interface UserB {
    type: typeof USER_LOGIN_SUCCESS;
    payload: {};
}
interface UserC {
    type: typeof USER_LOGIN_FAIL;
    payload: string | null;
}
interface UserD {
    type: typeof USER_LOGOUT;
    payload: string;
}

export type UserAction = UserA | UserB | UserC | UserD;

export interface UserI {
    loading: boolean;
    userInfo: {};
    error: null;
}
