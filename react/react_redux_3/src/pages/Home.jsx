import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, remove_to_cart, empty_cart } from '../redux/ReduxCart/CartAction'

const Home = () => {

  const productData = useSelector((state => state.cart))

  console.log('Home Data', productData);
  
  const dispatch = useDispatch()

  const product = {
    name:'Samsung S24',
    color:'Black',
    price:134400
  }

  return (
    <div className='heading'>
        <h1 className=''>This is Home Page</h1>
        <button className='' onClick={() => dispatch(add_to_cart(product))}>Add To Cart</button>
        <button className='' onClick={() => dispatch(remove_to_cart(product))}>Remove From Cart</button>
        <button className='' onClick={() => dispatch(empty_cart(product))}>Empty Cart</button>
    </div>
  )
}

export default Home