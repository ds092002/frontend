import React from "react";
import { BUY_CAKE } from "./Constant";
import { BUY_COCO } from "./Constant";

const initialState = {
    numOfCake:20,
    numOfCoco:40
}

const Reducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_CAKE:return{
            ...state,
            numOfCake:state.numOfCake - 1
        }
        case BUY_COCO:return{
            ...state,
            numOfCoco:state.numOfCoco - 1
        }
    
        default:return state
    }
}

export default Reducer