import {
    CHANGE_CURRENT_PAGE,
    CHANGE_WINDOW_WIDTH,
} from "../Const";

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