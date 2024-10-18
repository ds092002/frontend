import React from 'react'
import { BUY_COCO } from './Constant'

const initialCocoState = {
    NumOfCoco:20
}

const CocoReducer = (state = initialCocoState, action) => {
    switch (action.type) {
        case BUY_COCO:return{
            ...state,
            NumOfCoco:state.NumOfCoco-1
        }
        default: return state
    }
}

export default CocoReducer