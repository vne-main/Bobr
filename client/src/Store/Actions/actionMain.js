import {MAIN} from "../Const";

const actionCatchError = (message) => {
    return {
        type: MAIN.CATCH_ERROR,
        payload: message
    }
};

const changeCurrentPage = (page) => {
    return {
        type: MAIN.CHANGE_CURRENT_PAGE,
        payload: page
    }
};

const changeWindowWidth = () => {
    return {type: MAIN.CHANGE_WINDOW_WIDTH}
};

export {
    actionCatchError,
    changeCurrentPage,
    changeWindowWidth,
};