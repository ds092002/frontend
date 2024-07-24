import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-700'>
        <div className='container'>
            <div className='flex items-center justify-between py-4 '>
                <div className='px-4'>
                    <Link to="/">
                     <img src={logo} alt="" className='size-24'/>
                    </Link>
                </div>
                <ul className='flex text-white text-lg space-x-20 font-black'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">ContactUs</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar