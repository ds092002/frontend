import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove_to_cart } from '../redux/ReduxCart/CartAction'

const Cart = () => {

  const data = useSelector(state =>  state.cart)

  const dispatch =  useDispatch()
  return (
    <div>
        <h1 className=''>This is Cart Page</h1>
        <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Remove To Cart</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map(item => (
              <tr key={item.id}>
                <td className="px-4 py-4 whitespace-nowrap">
                  <img src={item.image} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.image}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${item.price}</td>
                <td className="px-4 py-7 whitespace-nowrap text-sm font-medium flex justify-center items-center space-x-2">
                  <div
                    className="relative inline-block"
                    onMouseEnter={() => handleMouseEnter(item.id, 'delete')}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <button className="text-red-500 hover:text-red-700 text-xl" onClick={() => DeleteStudent(item.id)}>
                      <MdDeleteOutline />
                    </button>
                    {showTooltip[item.id] === 'delete' && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                        Delete
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart