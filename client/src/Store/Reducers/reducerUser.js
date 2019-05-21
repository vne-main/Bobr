import {USER} from "../Const";

const userState = {
    usersList: [],
    user: {},
};

export default (state = userState, action) => {
    switch (action.type) {

        case USER.GET_USERS_LIST:
            return {
                ...state,
                usersList: action.payload,
            };

        case USER.GET_USER:
            localStorage.setItem('vC3ilOckStoreMode23Port', action.payload.token);
            return {
                ...state,
                user: action.payload
            };

        case USER.LOGOUT:
            localStorage.removeItem('vC3ilOckStoreMode23Port');
            return {
                ...state,
                user: {}
            };

        default:
            return state;
    }
};


