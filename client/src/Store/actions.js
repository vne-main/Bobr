import {
    GET_POST_LIST,
    GET_CURRENT_POST,
} from "./const";

export const getPostList = (arrayPosts) => {
    return {
        type: GET_POST_LIST,
        payload: arrayPosts
    }
};

export const getCurrentPost = (post) => {
    return {
        type: GET_CURRENT_POST,
        payload: post
    }
};
