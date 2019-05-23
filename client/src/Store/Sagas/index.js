import {takeLatest} from 'redux-saga/effects'
import {POST} from '../Const';

import {
    getPostList,
    getCurrentPost,
} from './sagaPost';

function* mySaga() {
    yield takeLatest(POST.GET_POST_LIST, getPostList);
    yield takeLatest(POST.GET_CURRENT_POST, getCurrentPost);
}

export default mySaga;