import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    CHANGE_CURRENT_PAGE,
    PUSH_NEW_POST,
    ADD_NEW_COMMENT,
    GET_USER,
    LOGOUT,
    SEARCH_POST,
} from "./const";

const initialState = {
    postList: [],
    currentPost: {},
    currentPage: "",
    user: {},
    searchList: [],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POST_LIST:
            console.info(action.payload);
            return {
                ...state,
                postList: action.payload
            };

        case CHANGE_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload
            };

        case CHANGE_CURRENT_PAGE:
            const bobr = 'Bobr:';
            switch (action.payload) {
                case 'home': document.title = `${bobr} Главная`; break;
                case 'publish': document.title = `${bobr} Опубликовать`; break;
                case 'users': document.title = `${bobr} Пользователи`; break;
                case 'post': document.title = `${bobr} Пост`; break;
                case 'profile': document.title = `${bobr} Профиль`; break;
                case 'search': document.title = `${bobr} Поиск`; break;
                default: document.title = `Bobr`;
            }
            window.scrollTo(0, 0);
            return {
                ...state,
                currentPage: action.payload
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

        case GET_USER:
            localStorage.setItem('vC3ilOckStoreMode23Port', action.payload.token);
            return {
                ...state,
                user: action.payload
            };

        case LOGOUT:
            localStorage.removeItem('vC3ilOckStoreMode23Port');
            return {
                ...state,
                user: {}
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