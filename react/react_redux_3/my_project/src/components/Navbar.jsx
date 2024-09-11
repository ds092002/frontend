import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import {useSelector} from 'react-redux'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const menuItems = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'AboutUS',
        to: '/aboutus',
    },
    {
        name: 'Shop',
        to: '/shop',
    },
    {
        name: 'Product',
        to: '/product',
    },
]

export function Navbar() {

    const result1 = useSelector((state) => state.cart)
    const result2 = useSelector((state) => state.whishlist)

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="sticky top-0 w-full z-50 bg-white">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span>
                    </span>
                    <NavLink to='/' className="font-bold">DevUI</NavLink>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-sm font-semibold text-[#0068C8] underline "
                                            : "text-sm font-semibold text-gray-800 hover:text-[#0068C8]"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <div className='relative'>
                    <Link to='/cart'>
                    <button
                        type="button"
                        className="rounded-md    bg-black px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <IoCartOutline />
                    </button>
                    </Link>
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 border rounded-full px-1 bg-black text-white text-xs">{result1.length}</span>
                    </div>
                    <div className='relative '>
                    <Link to='/whishlist'>
                    <button
                        type="button"
                        className="rounded-md    bg-black px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <FaRegHeart />
                    </button>
                    </Link>
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 border rounded-full px-1 bg-black text-white text-xs">{result2.length}</span>
                    </div>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                           
                                        </span>
                                        <span className="font-bold">DevUI</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    isActive
                                            ? "text-sm font-semibold text-[#0068C8] underline "
                                            : "text-sm font-semibold text-gray-800 hover:text-[#0068C8]"
                                                }
                                            >
                                                <span className="">
                                                    {item.name}
                                                </span>
                                            </NavLink>
                                        ))}
                                    </nav>
                                </div>
                                <div className='relative inline-block w-full'>
                                    <Link to='/cart'>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Cart
                                </button>
                                    </Link>
                                <span className="absolute top-5 right-0 transform translate-x-1/2 -translate-y-1/2 border rounded-full px-1 bg-black text-white text-xs">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Outlet />
        </div>
    )
}
