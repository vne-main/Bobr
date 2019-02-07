import {
    GET_POST_LIST
} from "./const";

export const getPostList = (arrayPosts) => {
    return {
        type: GET_POST_LIST,
        payload: arrayPosts
    }
};
