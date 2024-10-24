import { combineReducers } from 'redux';
import CocoReducer from './CocoReducer';
import ThikShakReducer from './ThikShakReducer';

// Combining the Coco and ThikShak reducers
const rootReducer = combineReducers({
  Cocos: CocoReducer,
  ThikShak: ThikShakReducer
})

export default rootReducer;
