import {MAIN} from "../Const";

const userState = {
    currentPage: "",
    windowWidth: window.innerWidth,
    showError: false,
    textError: "",
};

export default (state = userState, action) => {

    switch (action.type) {

        case MAIN.CHANGE_CURRENT_PAGE:
            const bobr = 'Bobr:';
            switch (action.payload) {
                case 'home':
                    document.title = `${bobr} Главная`;
                    break;
                case 'publish':
                    document.title = `${bobr} Опубликовать`;
                    break;
                case 'users':
                    document.title = `${bobr} Пользователи`;
                    break;
                case 'post':
                    document.title = `${bobr} Пост`;
                    break;
                case 'profile':
                    document.title = `${bobr} Профиль`;
                    break;
                case 'search':
                    document.title = `${bobr} Поиск`;
                    break;
                case 'chat':
                    document.title = `${bobr} Чат`;
                    break;
                case 'different':
                    document.title = `${bobr} Разное`;
                    break;
                default:
                    document.title = `Bobr`;
            }
            window.scrollTo(0, 0);
            return {
                ...state,
                currentPage: action.payload
            };

        case MAIN.CHANGE_WINDOW_WIDTH:
            return {
                ...state,
                windowWidth: window.innerWidth,
            };

        case MAIN.CATCH_ERROR:
            return {
                ...state,
                showError: !state.showError,
                textError: action.payload,
            };

        default:
            return state;
    }

};


