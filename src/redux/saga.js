import {saga as usersSaga} from '../ducks/users';
import {saga as authSaga} from '../ducks/auth';
import {saga as eventsSaga} from '../ducks/events'
import {all} from 'redux-saga/effects';

export default function*rootSaga() {
    yield all([
        usersSaga(),
        authSaga(),
        eventsSaga()
    ])
}