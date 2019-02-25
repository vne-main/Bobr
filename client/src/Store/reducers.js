import {
    GET_POST_LIST,
    CHANGE_CURRENT_POST,
    CHANGE_CURRENT_PAGE,
} from "./const";

const initialState = {
    postList: [],
    currentPost: {
        "id": null,
        "author_name": "",
        "author_img": "",
        "time": "",
        "title": "",
        "tags": [],
        "text": "",
        "likes": 0,
        "favorites": 0,
        "views": 0,
        "comments": []
    },
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
            }
            return {
                ...state,
                currentPage: action.payload
            };

        default:
            return state;
    }
};