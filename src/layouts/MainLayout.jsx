import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer';

const MainLayout = () => {
  console.log("mainloyout render..");
  
  return (
    <div className='flex h-full w-full'>
     <div className='mx-auto h-full w-full text-white'>
       <Navbar/>
       <div className='px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-40'>

    <Outlet/>
       </div>
       <Footer/>
     </div>
    </div>
  )
}

export default MainLayout
