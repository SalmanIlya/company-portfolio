import React from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Nav from "./Component/Nav/Nav"
import Footer from "./Component/Footer/Footer"
import Home from './Screen/Home/Home'
import About from './Screen/About/About'
import Contact from "./Screen/Contact/Contact"
import Team from "./Screen/Team/Team"
const Layout=()=>{
  return(
    <>
    <Nav/>
    <div className=''>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },{
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App