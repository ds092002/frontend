import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { buy_cake, buy_coco } from "../redux/Action";

const ShopContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)
    const numOfCocos = useSelector(state => state.numOfCoco)

    console.log('numOfcake',numOfCakes);
    console.log('numOfcoco',numOfCocos);

    const dispatch = useDispatch()

    return(
        <div>
            <h1>NumOfCakes:{numOfCakes}</h1>
            <h1>NumOfCocos:{numOfCocos}</h1>
            <button onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
            <button onClick={() => dispatch(buy_coco())}>Coco Decrement</button>
        </div>
    )
}

export default ShopContainer