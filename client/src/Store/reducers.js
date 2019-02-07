import {
    GET_POST_LIST,
} from "./const";

const initialState = {
    postList: []
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POST_LIST:
            const new_post_list = action.payload.array;
            return {
                ...state,
                postList:
                new_post_list
            };

        default:
            return state;
    }
};