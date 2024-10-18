import { BUY_COCO, BUY_THIKSHAK} from "./Constant"

const initialState = {
    NumOfCoco: 20,
    NumOfThikShak: 20
}

const Reducer = (state = initialState, action) => {
  console.log('Coco and thikshak Reducer Called!!!!');
  switch (action.type) {
    case BUY_COCO:return{
      ...state,
      NumOfCoco: state.NumOfCoco - 1
    }
    case BUY_THIKSHAK:return{
      ...state,
      NumOfThikShak: state.NumOfThikShak - 1
    }
    default: return state
  }
}

export default Reducer
