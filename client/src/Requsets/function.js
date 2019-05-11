import axios from 'axios';
import {store} from '../index';
import {actionCatchError} from '../Store/Actions/actionMain';

export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data,
    });
};

export const catchError = (message) => {

};

export const error500 = (err) => {
    console.error(err);
    store.dispatch(actionCatchError("На сервере проводятся технические работы"));
};