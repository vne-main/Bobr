import {
    GET_USER,
    LOGOUT,
    GET_USERS_LIST,
} from "../Const";

export const changeUsersList = (usersList) => {
    return {
        type: GET_USERS_LIST,
        payload: usersList,
    }
};

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