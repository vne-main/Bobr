import { request, error500 } from './function';

/* Redux */
import { store } from '../index';
import { changeUsersList } from 'Store/Actions/actionUser';

export const checkAuth = () => {
  const userToken = localStorage.getItem('vC3ilOckStoreMode23Port');
  request('post', '/auth/check', { token: userToken })
    .then(res => {
      // this.props.getUser(res.data)
    })
    .catch(err => error500(err));
};

export const getUsersList = () => {
  request('get', '/users')
    .then(res => {
      store.dispatch(changeUsersList(res.data));
    })
    .catch(err => error500(err));
};
