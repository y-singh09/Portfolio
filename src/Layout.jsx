import React from 'react'
import Header from './components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import  Contact  from './components/Contact/Contact'
function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
