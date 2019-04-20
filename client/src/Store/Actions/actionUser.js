import {
    GET_USER,
    LOGOUT,
} from "../Const";

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
};