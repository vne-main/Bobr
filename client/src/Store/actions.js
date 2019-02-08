import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    CHANGE_CURRENT_PAGE,
} from "./const";

export const getPostList = (postList) => {
    return {
        type: GET_POST_LIST,
        payload: postList
    }
};

export const changeCurrentPost = (post) => {
    return {
        type: CHANGE_CURRENT_POST,
        payload: post
    }
};

export const changeCurrentPage = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: page
    }
};