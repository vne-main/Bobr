import {request, error500 } from './function'

/* Redux */
import {store} from '../index';
import {getPostList} from "../Store/Actions/actionPost";

export const getPosts = () => {
    request('get', '/posts')
        .then(res => {
            store.dispatch(getPostList(res.data));
        })
        .catch(err => {
            console.info(err);
            error500();
        });
};

export const getPost = (id) => {
    return request('get', `/post/${id}`);
};

