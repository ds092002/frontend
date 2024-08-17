import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, remove_to_cart, empty_cart } from '../redux/ReduxCart/CartAction'

const Home = () => {


  const [homeData, setHomeData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/ecomall');
      const data = await response.json();
      setHomeData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productData = useSelector((state => state.cart))

  // console.log('Home Data', productData);

  const dispatch = useDispatch()

  // const product = {
  //   name:'Samsung S24',
  //   color:'Black',
  //   price:134400
  // }

  return (
    <div className=''>
      {/* <h1 className=''>This is Home Page</h1>
        <div className='flex flex-row gap-4 mt-4'>
        <button className='btn' onClick={() => dispatch(add_to_cart(product))}>Add To Cart
          {homeData.length > 0 ? (
            homeData.map((item, index) => {
              
            })
          )

          }
        </button>
        <button className='btn' onClick={() => dispatch(remove_to_cart(product))}>Remove From Cart</button>
        <button className='btn' onClick={() => dispatch(empty_cart(product))}>Empty Cart</button>
        </div> */}

      <div>
        <h1 className='flex justify-center items-center text-3xl italic font-bold'>This is Home page</h1>
        <div className='flex container flex-wrap justify-between space-y-4 mx-auto mt-10'>
          {homeData.length > 0 ? (
            homeData.map((item, index) => (
              <div class="flex font-sans border rounded-2xl w-[550px] overflow-hidden">
                <div class="w-48 md:w-64 relative">
                  <img src={item.image} alt="" class="absolute inset-0 w-50% h-full object-contain" loading="lazy" />
                </div>
                <form class="flex-auto p-6">
                  <div class="flex flex-wrap">
                    <h1 class="flex-auto text-lg font-semibold text-slate-900">
                      {item.title}
                    </h1>
                    <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                      In stock
                    </div>
                  </div>
                  <div class="text-lg font-semibold text-slate-500 flex-wrap">
                    RS.{item.price}
                  </div>
                  <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div class="space-x-2 flex text-sm">
                      <label>
                        <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                        <div class="w-44 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                          {item.category}
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="flex space-x-4 mb-6 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                      <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:text-slate-200 hover:bg-slate-900 transition duration-300" type="submit">
                        Add To cart
                      </button>
                      <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:text-slate-200 hover:bg-slate-900 transition duration-300" type="button">
                        Remove To cart
                      </button>
                      <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 hover:text-slate-200 hover:bg-slate-900 transition duration-300" type="button">
                        Empty Cart
                      </button>
                    </div>
                    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                      <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                      </svg>
                    </button>
                  </div>
                  <p class="text-sm text-slate-700">
                    Free shipping on all continental US orders.
                  </p>
                </form>
              </div>
            ))
          ) : (
            <p>Data Not Found......</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home