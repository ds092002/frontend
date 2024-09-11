import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_to_cart, empty_cart } from '../redux/ReduxCart/CartAction'

const Cart = () => {

  const data1 =  useSelector(state =>  state.cart)

  const dispatch =  useDispatch()
  console.log('cart data', data1);
  
  return (
    <div>
      <h1 className=''>This is Cart Page 1</h1>
      <button onClick={() => dispatch(empty_cart())}>Empty Cart</button>
      <div className='flex justify-center items-center h-lvh text-center'>
        <table className='table-fixed w-[800px]'>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Remove Cart</th>
          </tr>
          {
            data1.map((item) => {
              return (
                <tr key={item.id} className=''>
                  <td>
                    <img src={item.image} alt="cartimage" className='w-12 h-12' />
                  </td>
                  <td className=''>
                    <h2 className='text-wrap w-28 mx-auto line-clamp-1'>{item.title}</h2>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                  <td>
                    <button onClick={() => dispatch(remove_to_cart(item.id))} className='btn'>Remove</button>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>

    </div>
  )
}

export default Cart