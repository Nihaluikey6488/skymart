import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../screen/Home'
import Authentication from '../layouts/Authentication'
import Login from '../components/Login'
import Register from '../components/Register'
import About from '../screen/About'
import MainLayout from '../layouts/MainLayout'
import ProtectedRoute from '../components/ProtectedRoute'
import getAllProducts, { getProductById } from '../api/ProductsApi'
import Shop from '../screen/Shop'
import ProductsDetails from '../components/ProductsDetails'
import Cart from '../components/Cart'

const AppRoutes = () => {
   let val= createBrowserRouter([
    {
        path:"/dashboard",
        element:<ProtectedRoute/>,
        children:[
           {
            path:"",
          
            element:<MainLayout/>,
            
            children:[
                 {
                path:"",
               
              loader:async()=>{
                let data=await getAllProducts()
                return data

              },
              hydrateFallbackElement:<h1>"Loading...</h1>,
                element:<Home/>
            },
             {
                path:"shop",
               
                loader:async()=>{
                let data=await getAllProducts()
                return data

              },
              hydrateFallbackElement:<h1>"Loading...</h1>,
                element:<Shop/>
            },
            {
              path:"shop/products/:id",
              loader:async({params})=>{
                const [product, allProducts] = await Promise.all([
                  getProductById(params.id),
                  getAllProducts()
                ])

                return { product, allProducts }
              },
              element:<ProductsDetails/>
            },
            
                 {
                path:"about",
                element:<About/>
            },
                 {
                path:"cart",
                element:<Cart/>
            },
            ]
           }
             ]

    },{
        path:"/",
        element:<Authentication/>,
        children:[{
            path:"",
            element:<Login/>
        },{
            path:"/register",
            element:<Register/>
        }]
    }
      
    
   ])
  return (
    <RouterProvider router={val}></RouterProvider>
  )
}

export default AppRoutes
