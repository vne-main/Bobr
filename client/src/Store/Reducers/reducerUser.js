import {
    GET_USER,
    LOGOUT,
    GET_USERS_LIST,
} from "../Const";

const userState = {
    usersList: [],
    user: {},
};

export default (state = userState, action) => {
    switch (action.type) {

        case GET_USERS_LIST:
            return {
                ...state,
                usersList: action.payload,
            };

        case GET_USER:
            localStorage.setItem('vC3ilOckStoreMode23Port', action.payload.token);
            return {
                ...state,
                user: action.payload
            };

        case LOGOUT:
            localStorage.removeItem('vC3ilOckStoreMode23Port');
            return {
                ...state,
                user: {}
            };

        default:
            return state;
    }
};


