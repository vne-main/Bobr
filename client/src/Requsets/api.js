import {request} from './function'

/* Redux */
import {store} from '../index';
import {getPostList} from "../Store/Actions/actionPost";

export const getPosts = () => {
    request('get', '/post')
        .then(res => {
            store.dispatch(getPostList(res.data));
        })
        .catch(err => {
            console.info(err)
        });
};
