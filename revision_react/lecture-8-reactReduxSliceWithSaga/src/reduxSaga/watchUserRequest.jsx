import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUserError, fetchUserRequest, fetchUserSuccess } from './userSlice'

const fetchUserApi = () => fetch('https://dummyjson.com/users/3').then((response) => response.json())

function* fetchUserSaga() {
    try {
        const data =  yield call(fetchUserApi)
        yield put(fetchUserSuccess(data))
    } catch (error) {
        yield put(fetchUserError(error.toString()))
    }
}

function* watchFetchUser() {
    yield takeLatest(fetchUserRequest.type, fetchUserSaga)
}

export default watchFetchUser 