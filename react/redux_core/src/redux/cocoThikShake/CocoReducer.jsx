import { BUY_COCO } from "./CocoConstant";

const initialState = {
    numOfCoco:20
}

export const CocoReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COCO: return{
            ...state,
            numOfCoco:state.numOfCoco - 1
        }
        default:return state
    }
}