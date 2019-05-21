import {POST} from "../Const";

const getPostList = (postList) => {
    return {
        type: POST.GET_POST_LIST,
        payload: postList.reverse()
    }
};

const changeCurrentPost = (post) => {
    return {
        type: POST.CHANGE_CURRENT_POST,
        payload: post
    }
};

const pushNewPost = (newPost) => {
    return {
        type: POST.PUSH_NEW_POST,
        payload: newPost
    }
};

const addNewComment = (newComment) => {
    return {
        type: POST.ADD_NEW_COMMENT,
        payload: newComment
    }
};

const searchPost = (string) => {
    return {
        type: POST.SEARCH_POST,
        payload: string
    }
};

export {
    getPostList,
    changeCurrentPost,
    pushNewPost,
    addNewComment,
    searchPost,
};