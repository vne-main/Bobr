import {
    CHANGE_CURRENT_PAGE,
    CHANGE_WINDOW_WIDTH,
    CATCH_ERROR,
} from "../Const";

export const actionCatchError = (message) => {
    return {
        type: CATCH_ERROR,
        payload: message
    }
};

export const changeCurrentPage = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: page
    }
};

export const changeWindowWidth = () => {
    return {
        type: CHANGE_WINDOW_WIDTH,
    }
};