import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buy_cake , buy_coco } from '../redux/Action'

const ShopContainer = () => {

    const numOfCakes = useSelector(state => state.numOfCake)
    const numOfCocos = useSelector(state => state.numOfCoco)

    console.log('numOfCake' , numOfCakes);
    console.log('numOfCoco' , numOfCocos);
    
    
    const dispatch = useDispatch()

  return (
    <div>
      <h1>NumOfCakes:{numOfCakes}</h1>
      <button onClick={() => dispatch(buy_cake())}>Cake Decrement</button>
      <h1>NumOfChocos:{numOfCocos}</h1>
      <button onClick={() => dispatch(buy_coco())}>Choco Decrement</button>
    </div>
  )
}

export default ShopContainer