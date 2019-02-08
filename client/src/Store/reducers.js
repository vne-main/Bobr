import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    CHANGE_CURRENT_PAGE,
} from "./const";

const initialState = {
    postList: [],
    currentPost: {},
    currentPage: "",
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POST_LIST:
            return {
                ...state,
                postList: action.payload
            };

        case CHANGE_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload
            };

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };

        default:
            return state;
    }
};