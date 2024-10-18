import React from 'react'
import { BUY_THIKSHAK } from './Constant'

const initialThikShakState = {
    NumOfThikShak:20
}

const ThikShakReducer = (state = initialThikShakState, action) => {
  switch (action.type) {
    case BUY_THIKSHAK:return{
        ...state,
        NumOfThikShak: state.NumOfThikShak - 1
    }
    default: return state
  }
}

export default ThikShakReducer