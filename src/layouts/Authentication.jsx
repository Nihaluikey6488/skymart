import React from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentication = () => {
  return (
    <div className='h-full w-screen'>
      
        <Outlet/>
        <ToastContainer/>

      
    </div>
  )
}

export default Authentication
