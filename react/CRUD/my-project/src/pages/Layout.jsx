import React from 'react'
import Home from './Home'
import Add from './Add'
import Edit from './Edit'
import Login from './Login'
import Profile from './Profile'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Error404'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={Home}></Route>
                <Route path='/edit' element={Edit}></Route>
                <Route path='/add' element={Add}></Route>
                <Route path='/login' element={Login}></Route>
                <Route path='/profile' element={Profile}></Route>
                <Route path='*' element={ErrorPageTwo}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout