import {
    GET_USER,
    LOGOUT,
} from "../Const";

const userState = {
    user: {},
};

export default (state = userState, action) => {
    switch (action.type) {

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


