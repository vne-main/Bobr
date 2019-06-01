import {MODAL} from "../Const";

const openModal = (type) => {
    return {
        type: MODAL.OPEN_MODAL,
        payload: type,
    }
};

const closeModal = () => {
    return {type: MODAL.CLOSE_MODAL}
};

export {
    openModal,
    closeModal,
}