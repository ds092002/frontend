import { BUY_COCO } from './Constant';

// Initial state for Coco
const initialCocoState = {
    NumOfCoco: 20
}

// Reducer for managing Coco-related actions
const CocoReducer = (state = initialCocoState, action) => {
    switch (action.type) {
        case BUY_COCO: 
            return {
                ...state,
                NumOfCoco: state.NumOfCoco - 1 // Decrease Coco count
            }
        default: 
            return state
    }
}

export default CocoReducer;
