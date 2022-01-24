import axios from "axios";
import { Dispatch } from "redux";
import {
    UserAction,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "../constants/userConstants";

export const login =
    (email: string, password: string) =>
    async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: USER_LOGIN_REQUEST });

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post(
                "/api/users/login",
                { email, password },
                config
            );
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
        } catch (error: any) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                    error?.response && error?.response.data.message
                        ? error?.response.data.message
                        : error?.message,
            });
        }
    };
