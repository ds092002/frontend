import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'
import ContactUs from './ContactUs'
import Shop from './Shop'
import AboutUs from './AboutUs'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='shop' element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout