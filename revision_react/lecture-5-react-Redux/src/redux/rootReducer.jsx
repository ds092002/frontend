import React from 'react'
import CocoReducer from './CocoReducer'
import ThikShakReducer from './ThikShakReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  Cocos:CocoReducer,
  ThikShak:ThikShakReducer
})

export default rootReducer