import {MODAL} from "../Const";

const modalState = {
    bugReport: false,
};

export default (state = modalState, action) => {

    switch (action.type) {

        case MODAL.OPEN_MODAL:
            return {
                ...state,
                [action.payload]: true,
            };

        case MODAL.CLOSE_MODAL:
            return {
                ...state,
                bugReport: false,
            };

        default:
            return state;

    }

};


