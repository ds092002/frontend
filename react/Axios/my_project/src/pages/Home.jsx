import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Star, ChevronDown } from 'lucide-react'

const Home = () => {

  const [data, setData] = useState([])

  console.log()

  useEffect(() => {
    axios.get('http://localhost:3000/ecomall')
      .then((response) => {
        console.log(response);
        setData(response.data)
      })
  }, [])

  return (
    <div>
      <h1>This is Shop Page</h1>
      <div className='grid grid-cols-2'>
        {
          data.map((item) => {
            return (
              <>
                <section className="overflow-hidden">
                  <div className="mx-auto max-w-5xl px-5 py-24">
                    <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                      <img
                        alt="Nike Air Max 21A"
                        className="h-32 w-[50%] rounded object-contain lg:h-72 lg:w-1/2"
                        src={item.image}
                      />
                      <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h3 className="my-4 text-3xl font-semibold text-black">{item.title}</h3>
                        <div className="my-4 flex items-center">
                          <span className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} className="text-yellow-500" />
                            ))}
                            <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
                          </span>
                        </div>
                        <p className="leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                          <div className="flex items-center">
                            <span className="mr-3 text-sm font-semibold">Color</span>
                            <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                            <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                            <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                          </div>
                          <div className="ml-auto flex items-center">
                            <span className="mr-3 text-sm font-semibold">Size</span>
                            <div className="relative">
                              <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                                <option>8 UK</option>
                                <option>9 UK</option>
                                <option>10 UK</option>
                              </select>
                              <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                                <ChevronDown size={16} />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="title-font text-xl font-bold text-gray-900">Rs.{item.price}</span>
                          <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
