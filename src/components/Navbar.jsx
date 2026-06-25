import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars,  FaXmarksLines } from "react-icons/fa6";
function Navbar() {
const [showMenu, setshowMenu] = useState(false)

  return (
    <motion.nav className="fixed w-full z-50 bg-dark-100/90 back-drop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#">
            SAGHEER
            <span className="text-purple-600">AHMED</span>
            <div className="w-4 h-4 bg-purple-700 rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

             <a
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>About</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

             <a
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Skills</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

             <a
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Projects</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

             <a
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>      
        {/*mobile button */}  
      <div className="md:hidden">
        {
            showMenu ?<FaXmarksLines onClick={()=> setshowMenu(!showMenu)} className="text-2xl cursor-pointer"/>: <FaBars  onClick={()=> setshowMenu(!showMenu)} className="text-2xl cursor-pointer"/>

        }
       
        
      </div>

      </div>
      {/*mobile menu */}
      {
        showMenu &&(
            <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
                        <a onClick={()=> setshowMenu(!showMenu)}
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Home</span>
           
          </a>

             <a onClick={()=> setshowMenu(!showMenu)}
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-400 active:text-purple-400 group "
          >
            <span>About</span>
           
          </a>

             <a onClick={()=> setshowMenu(!showMenu)}
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Skills</span>
           
          </a>

             <a onClick={()=> setshowMenu(!showMenu)}
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Projects</span>
            
          </a>

             <a onClick={()=> setshowMenu(!showMenu)}
            href="#"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Contact</span>
          </a>
            </div>
        )
      }
    </motion.nav>
  );
}

export default Navbar;
