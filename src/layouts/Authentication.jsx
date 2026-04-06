import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentication = () => {
  return (
    <div className='min-h-screen w-full bg-[#0d0d0d]'>
      
        <Outlet/>
        <ToastContainer/>

      
    </div>
  )
}

export default Authentication
