import {
    LIKE_INCREMENT
} from "./const";

const initialState = {
    news: [
        {id: 0, name: "news"}
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_INCREMENT:
            console.log("YES!");
            return state;

        default:
            return state;
    }
};