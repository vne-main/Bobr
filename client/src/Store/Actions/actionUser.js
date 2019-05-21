import {USER} from "../Const";

const changeUsersList = (usersList) => {
    return {
        type: USER.GET_USERS_LIST,
        payload: usersList,
    }
};

const getUser = (user) => {
    return {
        type: USER.GET_USER,
        payload: user
    }
};

const logout = () => {
    return {type: USER.LOGOUT}
};

export {
    changeUsersList,
    getUser,
    logout,
}