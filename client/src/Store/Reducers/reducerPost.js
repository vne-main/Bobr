import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    PUSH_NEW_POST,
    ADD_NEW_COMMENT,
    SEARCH_POST,
} from "../Const";

const postsState = {
    postList: [],
    searchList: [],
    currentPost: {},
};

export default (state = postsState, action) => {
    switch (action.type) {

        case GET_POST_LIST:
            return {
                ...state,
                postList: action.payload
            };

        case CHANGE_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload
            };

        case PUSH_NEW_POST:
            return {
                ...state,
                postList: [].concat(action.payload, state.postList)
            };

        case ADD_NEW_COMMENT:
            const indexPost = state.postList.findIndex(post => {
                return post._id === action.payload._id;
            });
            let updatePostList = [...state.postList];
            updatePostList[indexPost].comments = action.payload.comments;
            return{
                ...state,
                currentPost: action.payload,
                postList: updatePostList
            };

        case SEARCH_POST:
            const searchStr = action.payload.toLowerCase();
            const searchArr = [...state.postList].filter((el) => {
                if(el.title.toLowerCase().includes(searchStr)){
                    return el.title.toLowerCase().includes(searchStr);
                } else {
                    return el.text.toLowerCase().includes(searchStr);
                }
            });
            return {
                ...state,
                searchList: searchArr
            };

        default:
            return state;
    }
};