"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import NavButton from '@/app/components/ui/NavButton';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleSetMenu() {
        setMenuOpen((prev) => !prev);
    }
   
  return (
    <div className='flex items-center'>


      {/* Large screen navbar links */}
      <div className='hidden md:flex md:gap-3'>
        <ul className='flex flex-row list-none gap-7 mx-10 items-center'>
            <li>
              <Link 
                href="/"
                className="text-md text-[#00000099] transition-colors hover:text-indigo-700 block py-2"
                onClick={handleSetMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-md text-[#00000099] transition-colors hover:text-indigo-700 block py-2"
                onClick={handleSetMenu}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-md text-[#00000099] transition-colors hover:text-indigo-700 block py-2"
                onClick={handleSetMenu}
              >
                Customers
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-md text-[#00000099] transition-colors hover:text-indigo-700 block py-2"
                onClick={handleSetMenu}
              >
                Updates
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-md text-[#00000099] transition-colors hover:text-indigo-700 block py-2"
                onClick={handleSetMenu}
              >
                Help
              </Link>
            </li>
          </ul>

          <NavButton href='#' className='text-white bg-black inline pt-[10px] pl-[15px] pr-[15px] pb-[10px] rounded-[10px] mr-5'>Get for free</NavButton>
      </div>



      {/* Hamberger button for mobile viewport */}
      <div
        onClick={handleSetMenu}
        className="relative w-[30px] h-[25px] flex flex-col justify-center items-center cursor-pointer z-[1002] md:hidden"
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
          className="fixed inset-0 bg-black/30 z-[1001] md:hidden"
          onClick={handleSetMenu}
        ></div>
      )}


      {/* Mobile navbar links */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#EAEEFE] shadow-lg z-[1002] transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
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
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                Customers
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                Updates
              </Link>
            </li>
            <li>
              <Link 
                href="/"
                className="text-xl font-semibold text-black transition-colors hover:text-blue-600 block py-2"
                onClick={handleSetMenu}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}