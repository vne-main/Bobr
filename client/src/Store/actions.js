import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    CHANGE_CURRENT_PAGE,
    PUSH_NEW_POST,
    ADD_NEW_COMMENT,
} from "./const";

export const getPostList = (postList) => {
    return {
        type: GET_POST_LIST,
        payload: postList.reverse()
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

export const pushNewPost = (newPost) => {
    return {
        type: PUSH_NEW_POST,
        payload: newPost
    }
};

export const addNewComment = (newComment) => {
    return {
        type: ADD_NEW_COMMENT,
        payload: newComment
    }
};