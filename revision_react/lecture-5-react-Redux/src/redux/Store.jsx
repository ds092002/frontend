import {createStore} from 'redux'
// import Reducer from './Reducer'
import rootReducer from './rootReducer'

// const Store = createStore(Reducer)
const Store = createStore(rootReducer)

export default Store