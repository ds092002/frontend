import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import ContactUs from './ContactUs'
import Shop from './Shop'
import AboutUs from './AboutUs'
import Page404 from './404Error'
import NewProductPage from './NewProductPage'
import OldProductPage from './OldProductPage'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Outlet */

// const PageRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar />,
//     children:[
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <AboutUs/>
//       },
//       {
//         path: '/contact',
//         element: <ContactUs/>
//       },
//       {
//         path: '/shop',
//         element: <Shop/>
//       }
//     ]
//   }
// ])

const Layout = () => {
  return (
    <div>
        {/* <RouterProvider router={PageRouter}>
        </RouterProvider> */}
        <BrowserRouter>
          <Navbar>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<AboutUs/>}></Route>
              <Route path='/contact' element={<ContactUs/>}></Route>
              <Route path='/shop' element={<Shop/>}>
                <Route path='newproduct' element={<NewProductPage/>}></Route>
                <Route path='oldproduct' element={<OldProductPage/>}></Route>
              </Route>
              <Route path='/*' element={<Page404/>}></Route>
            </Routes>
          </Navbar>
        </BrowserRouter>
    </div>
  )
}

export default Layout