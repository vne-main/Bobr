import {request, catchError, error500 } from './function'

/* Redux */
import {store} from '../index';

export const checkAuth = () => {
    const userToken = localStorage.getItem('vC3ilOckStoreMode23Port');
    request('post', '/auth/check', {token: userToken})
        .then(res => {
            console.info(res);
            // this.props.getUser(res.data)
        })
        .catch(err => {
            console.info(err);
            error500();
        });
};


