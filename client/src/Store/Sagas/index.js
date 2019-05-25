import {takeLatest} from 'redux-saga/effects'
import {SAGA} from '../Const';
import {getPostList} from './sagaPost';

function* mySaga() {
    yield takeLatest(SAGA.GET_POST_LIST, getPostList);
}

export default mySaga;