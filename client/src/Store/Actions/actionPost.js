import {POST} from "../Const";

const getPostList = () => {
    return {type: POST.GET_POST_LIST}
};

const getCurrentPost = () => {
    return {type: POST.GET_CURRENT_POST}
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
    getCurrentPost,
    pushNewPost,
    addNewComment,
    searchPost,
};