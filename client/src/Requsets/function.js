import axios from 'axios';
import { store } from '../index';
import { changeCurrentPage, actionCatchError } from 'Store/Actions/actionMain';

export const request = (method, url, data) => {
  return axios({
    method: method,
    url: url,
    data: data,
  });
};

export const changePage = page => {
  store.dispatch(changeCurrentPage(page));
};

export const error500 = err => {
  console.error(err);
  store.dispatch(actionCatchError('На сервере проводятся технические работы'));
};
