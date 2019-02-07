import {
    GET_POST_LIST,
    GET_CURRENT_POST,
} from "./const";

const initialState = {
    postList: [],
    currentPost: {},
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POST_LIST:
            const new_post_list = action.payload.array;
            return {
                ...state,
                postList: new_post_list
            };

        case GET_CURRENT_POST:
            const current_post = action.payload;
            return {
                ...state,
                currentPost: current_post
            };

        default:
            return state;
    }
};