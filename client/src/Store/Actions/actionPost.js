import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    PUSH_NEW_POST,
    ADD_NEW_COMMENT,
    SEARCH_POST,
} from "../Const";

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

export const searchPost = (string) => {
    return {
        type: SEARCH_POST,
        payload: string
    }
};