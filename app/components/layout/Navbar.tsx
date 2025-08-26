// Navbar.jsx
"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleSetMenu() {
        setMenuOpen((prev) => !prev);
    }
   
  return (
    <div className='flex items-center'>
   
      <div
        onClick={handleSetMenu}
        className="relative w-[30px] h-[25px] flex flex-col justify-center items-center cursor-pointer z-[1002]"
      >
        {/* Top Bar */}
        <span
          className={`absolute w-full h-[4.0px] bg-black/85 rounded-[3px] transition-all duration-200 ease-in-out
          ${menuOpen ? 'rotate-45' : '-translate-y-[8px]'}`}
        ></span>

        {/* Middle Bar */}
        <span
          className={`absolute w-full h-[4.0px] bg-black/85 rounded-[3px] transition-all duration-200 ease-in-out
          ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>

        {/* Bottom Bar */}
        <span
          className={`absolute w-full h-[4.0px] bg-black/85 rounded-[3px] transition-all duration-200 ease-in-out
          ${menuOpen ? '-rotate-45' : 'translate-y-[8px]'}`}
        ></span>
      </div>





      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[1001]"
          onClick={handleSetMenu}
        ></div>
      )}



      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#EAEEFE] shadow-lg z-[1002] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-7 h-full flex flex-col">
            
          <div className="flex justify-end mb-20 mt-10">
            <button onClick={handleSetMenu} className="text-5xl font-bold"><IoClose /></button>
          </div>
          
          <ul className='flex flex-col list-none gap-8 mx-auto items-center'>
            <li>
              <Link 
                href="/"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/services"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link 
                href="/projects"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          
        </div>
        
      </div>
    </div>
  )
}

export default Navbar