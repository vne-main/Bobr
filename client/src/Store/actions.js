import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
} from "./const";

export const getPostList = (postList) => {
    return {
        type: GET_POST_LIST,
        payload: postList
    }
};

export const changeCurrentPost = (currentPost) => {
    return {
        type: CHANGE_CURRENT_POST,
        payload: currentPost
    }
};
