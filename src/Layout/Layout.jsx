import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = (props) => {
  return (
    <div>
      <Navbar/>
    {props.children}
    <br /><br /><hr />
    <Footer/>
    </div>
  )
}

export default Layout
