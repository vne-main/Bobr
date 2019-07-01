import {MAIN} from "../Const";

const userState = {
    currentPage: "",
    windowWidth: window.innerWidth,
    showError: false,
    textError: "",
};

const TitlePage = {
    home: "Главная",
    publish: "Опубликовать",
    users: "Пользователи",
    post: "Пост",
    profile: "Профиль",
    search: "Поиск",
    chat: "Чат",
    different: "Разное",
    about: "О сайте",
    advertising: "Реклама",
    documentation: "Документация",
    help: "Помощь",
    statistics: "Статистика",
    work: "Работа",
    notFound: "Не найдено :(",


};

export default (state = userState, action) => {

    switch (action.type) {

        case MAIN.CHANGE_CURRENT_PAGE:
            document.title = `Bobr: ${TitlePage[action.payload]}`;
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


