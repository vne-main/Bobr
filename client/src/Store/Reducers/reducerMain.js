import { MAIN } from "../Const";
import { PAGES_TITLE } from "Const/pages";

const userState = {
  currentPage: "",
  windowWidth: window.innerWidth,
  showError: false,
  textError: ""
};

export default (state = userState, action) => {
  switch (action.type) {
    case MAIN.CHANGE_CURRENT_PAGE:
      document.title = `Bobr: ${PAGES_TITLE[action.payload.slice(1)]}`;
      window.scrollTo(0, 0);
      return {
        ...state,
        currentPage: action.payload
      };

    case MAIN.CHANGE_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: window.innerWidth
      };

    case MAIN.CATCH_ERROR:
      return {
        ...state,
        showError: !state.showError,
        textError: action.payload
      };

    default:
      return state;
  }
};
