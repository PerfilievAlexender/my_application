import {appName} from '../config';
import {put, takeEvery, call} from 'redux-saga/effects';
import {generateId} from './utils';


export const moduleName = 'users';
export const ADD_USER_REQUEST = `${appName}/${moduleName}/ADD_USER_REQUEST`;
export const ADD_USER = `${appName}/${moduleName}/ADD_USER`;

export default function reduser(state = [], action) {
    const {type, payload, error} = action;

    switch (type) {
        case ADD_USER:
            return [...state, payload]
        
        default: 
            return state
    };
};

export function addNewUser(person) {
    return {
        type:  ADD_USER_REQUEST,
        payload: person
    };
};

export const addNewUserSaga = function*(action) {
    const id = yield call(generateId);
    yield put({
        type: ADD_USER,
        payload: {...action.payload, id: id}
    });
};

export const saga = function*() {
    yield takeEvery(ADD_USER_REQUEST, addNewUserSaga)
};