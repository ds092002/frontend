import { createStore } from "redux";

import { CakeReducer } from "./cake/CakeReducer";
import { CocoReducer } from "./cocoThikShake/CocoReducer";

const Store = createStore(CakeReducer, CocoReducer)

export default Store