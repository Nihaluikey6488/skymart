import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footeer from '../components/Footer';
import Footer from '../components/Footer';

const MainLayout = () => {
  console.log("mainloyout render..");
  
  return (
    <div className='w-full h-full flex   '>
     <div className='w-full mx-auto h-full text-white'>
       <Navbar/>
       <div className='px-40'>

    <Outlet/>
       </div>
       <Footer/>
     </div>
    </div>
  )
}

export default MainLayout
