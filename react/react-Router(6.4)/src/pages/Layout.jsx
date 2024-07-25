import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import ContactUs from './ContactUs'
import Shop from './Shop'
import AboutUs from './AboutUs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Outlet */

const PageRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <ContactUs/>
      },
      {
        path: '/shop',
        element: <Shop/>
      }
    ]
  }
])

const Layout = () => {
  return (
    <div>
        <RouterProvider router={PageRouter}>
        </RouterProvider>
    </div>
  )
}

export default Layout