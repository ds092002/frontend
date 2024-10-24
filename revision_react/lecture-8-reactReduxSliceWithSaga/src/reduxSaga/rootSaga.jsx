// Importing the 'all' effect from Redux Saga
import { all } from 'redux-saga/effects'
// Importing the watcher saga
import watchFetchUser from './watchUserRequest'

// Root saga to combine multiple sagas (currently just 'watchFetchUser')
export default function* rootSaga() {
    yield all([watchFetchUser()]) // Running all sagas simultaneously
}
