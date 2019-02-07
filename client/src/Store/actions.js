import {
    LIKE_INCREMENT
} from "./const";

export const likeIncrement = (id) => {
    return {
        type: LIKE_INCREMENT,
        payload: id
    }
};