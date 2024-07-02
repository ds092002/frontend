import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='bg-gray-800 p-3 flex justify-between text-white'>
                <h1 className='text-3xl font-bold hover:scale-105 hover:text-[#FFB400] duration-300 transition'><a href='#'>React.JS</a></h1>
                <ul className='flex justify-between items-center w-1/3'>
                    <li className='text-xl font-semibold hover:scale-105 hover:text-[#FFB400] duration-300 transition'><a href='#'>Home</a></li>
                    <li className='text-xl font-semibold hover:scale-105 hover:text-[#FFB400] duration-300 transition'><a href='#'>About</a></li>
                    <li className='text-xl font-semibold hover:scale-105 hover:text-[#FFB400] duration-300 transition'><a href='#'>Service</a></li>
                    <li className='text-xl font-semibold hover:scale-105 hover:text-[#FFB400] duration-300 transition'><a href='#'>Contact</a></li>
                    <li className='text-xl font-semibold hover:scale-105 hover:text-[#FFB400] duration-300 transition'><a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header