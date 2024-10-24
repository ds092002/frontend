// Importing necessary functions from Redux Saga
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// Importing actions from userSlice
import { fetchUserError, fetchUserRequest, fetchUserSuccess } from './userSlice'

// Function to fetch user data from API (returns a promise)
const fetchUserApi = () => fetch('https://dummyjson.com/users/3').then((response) => response.json())

// Saga function to handle side effects (API fetching)
function* fetchUserSaga() {
    try {
        const data =  yield call(fetchUserApi)  // Calling API to fetch data
        yield put(fetchUserSuccess(data))       // Dispatching success action with the data
    } catch (error) {
        yield put(fetchUserError(error.toString())) // Dispatching error action in case of failure
    }
}

// Watcher saga that listens to 'fetchUserRequest' action and triggers 'fetchUserSaga'
function* watchFetchUser() {
    yield takeLatest(fetchUserRequest.type, fetchUserSaga) // Using takeLatest to only handle the most recent fetch
}

// Exporting the watcher saga
export default watchFetchUser
