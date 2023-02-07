import {FaBars} from "react-icons/fa"
import React  from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import "./style.css"
export default function Navbar(){
  const navagate=useNavigate()
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const clickitem=(id)=>{
              
    const elemant=document.getElementById(id)
    if(elemant){
      elemant.scrollIntoView({behavior:"smooth"})
    }
  }
  return (
    <>
      <nav className="relative nav  flex flex-wrap items-center  justify-between px-2 py-3 bg-purple-600 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <motion.a animate={{x:5}}
              className="text-sm font-bold leading-relaxed inline-block mr-4  py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              zinc Tailwind Starter Kit
            </motion.a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition-12"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars size={30}/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item mx-5 hover:scale-105 duration-200 text-white" onClick={()=>{navagate("/")}}>
                Home
              </li>
              <li className="nav-item mx-5 hover:scale-105 duration-200 text-white" onClick={()=>{navagate("/about")}}>
                About
              </li>
              <li className="nav-item mx-5 hover:scale-105 duration-200 text-white" onClick={()=>{navagate("/contact")}}>
                Contact
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}