import { USER } from '../Const';

const changeUsersList = usersList => {
  return {
    type: USER.GET_USERS_LIST,
    payload: usersList
  };
};

const searchUser = string => {
  return {
    type: USER.SEARCH_USER,
    payload: string
  };
};

const getUser = user => {
  return {
    type: USER.GET_USER,
    payload: user
  };
};

const logout = () => {
  return { type: USER.LOGOUT };
};

export { changeUsersList, searchUser, getUser, logout };
