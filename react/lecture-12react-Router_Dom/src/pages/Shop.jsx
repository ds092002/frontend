import React from 'react'

import {Outlet, useNavigate} from 'react-router-dom'

const Shop = () => {

  const navigate = useNavigate();

  return (
    <div>

        <h1 className='heading'>This is Shop Page</h1>
        <button onClick={() => navigate('newproduct')} className='active'>Click For New Product</button>
        <button onClick={() => navigate('oldproduct')} className='active'>Click For Old Product</button>
        <Outlet/>
    </div>
  )
}

export default Shop