import {all} from 'redux-saga/effects'
import watchFetchUser from './watchUserRequest'

export default function* rootSaga(){
    yield all([watchFetchUser()])
}