
import React from 'react'
import COCOReducer from './COCO/COCOReducer'
import { CakeReducer } from './cake/CakeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    CakeReducer,
    COCOReducer
})

export default rootReducer
