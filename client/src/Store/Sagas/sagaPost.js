import {call, put} from 'redux-saga/effects';
import {POST} from "../Const";
import {getPosts, getPost} from "../../Requsets/apiPost";
import {error500} from "../../Requsets/function";

function* getPostList (action) {
    try {
        yield put({type: POST.LOADING});
        const posts = yield call(getPosts, action.payload);
        yield put({type: POST.CHANGE_POST_LIST, posts: posts.data});
    } catch (e) {
        error500(e);
    }
}

function* getCurrentPost (action) {
    try {
        yield put({type: POST.LOADING});
        const post = yield call(getPost, action.payload);
        yield put({type: POST.CHANGE_CURRENT_POST, post: post.data});
    } catch (e) {
        error500(e);
    }
}

export {getPostList, getCurrentPost}