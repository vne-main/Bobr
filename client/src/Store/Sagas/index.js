import {call, put, takeLatest} from 'redux-saga/effects'
// import {ApiFetchUser} from './api'

function* fetchUser(action) {
    try {
        yield put({type: "LOADING", payload: action.payload});
        const user = yield call("", action.payload);
        yield put({type: "USER_FETCH_SUCCEEDED", img: user.data.message});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;