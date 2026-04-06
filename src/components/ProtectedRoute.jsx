import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserData } from '../context/MyContexr'
import { toast } from 'react-toastify'

const ProtectedRoute = () => {
console.log("protected route...")
let {loggedUser}=useContext(UserData)
if(!loggedUser){
    toast.error("UnAuthorized Error..")
    return <Navigate to="/"/>
}
 
  return <Outlet/>
}

export default ProtectedRoute
