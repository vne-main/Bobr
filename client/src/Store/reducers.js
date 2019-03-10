import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    CHANGE_CURRENT_PAGE,
    PUSH_NEW_POST,
    ADD_NEW_COMMENT,
} from "./const";

const initialState = {
    postList: [],
    currentPost: {},
    currentPage: "",
};

export const rootReducer = (state = initialState, action) => {
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

        case CHANGE_CURRENT_PAGE:
            const bobr = 'Bobr:';
            switch (action.payload) {
                case 'home': document.title = `${bobr} Главная`; break;
                case 'publish': document.title = `${bobr} Опубликовать`; break;
                case 'users': document.title = `${bobr} Пользователи`; break;
                case 'post': document.title = `${bobr} Пост`; break;
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

        default:
            return state;
    }
};