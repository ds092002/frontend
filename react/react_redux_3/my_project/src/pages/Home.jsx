import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart } from '../redux/ReduxCart/CartAction'
import { add_to_whishlist } from '../redux/ReduxWhishList/WhishlistAction'
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";

const Home = () => {


  const [product, setProduct] =  useState([])
  
  console.log('home product', product);

  useEffect(() => {
    const res = axios.get('http://localhost:3000/ecomall')
    .then((res) => {
      setProduct(res.data)
      console.log('Home data', res.data);
    })
  }, [])

  const productData =  useSelector((state => state.cart))
  const whishlistData = useSelector((state => state.whishlist))
  const dispatch = useDispatch()
  
  console.log('product data', productData);
  console.log('WhishList Data', whishlistData); 
  

  return (
    <div className=''>

      <div>
        <h1 className='flex justify-center items-center text-3xl italic font-bold'>This is Home page</h1>
        <div className='flex container flex-wrap justify-between space-y-4 mx-auto mt-10'>
        {
            product.map((item ) =>  (
              <div className="flex font-sans border rounded-2xl w-[550px] overflow-hidden">
                <div className="w-48 md:w-64 relative">
                  <img src={item.image} alt="" className="absolute inset-0 w-50% h-full object-contain" loading="lazy" />
                </div>
                <form className="flex-auto p-6">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900 line">
                      {item.title}
                    </h1>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                      In stock
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-slate-500 flex-wrap">
                    RS.{item.price}
                  </div>
                  <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                      <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:text-slate-200 hover:bg-slate-900 transition duration-300" type="button" onClick={() => dispatch(add_to_cart(item))}>
                        Add To cart
                      </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like" onClick={() => dispatch(add_to_whishlist(item))}>
                    <FaRegHeart/>
                    </button>
                  </div>
                  <p className="text-sm text-slate-700">
                    Free shipping on all continental India orders.
                  </p>
                </form>
              </div>
            )
            )}
        </div>
      </div>
    </div>
  )
}

export default Home