import {
    CHANGE_CURRENT_PAGE,
} from "../Const";

export const changeCurrentPage = (page) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: page
    }
};