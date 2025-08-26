import React from 'react'
import Logo from '../ui/Logo'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa'


function Header() {
  return (
    <>
    <div className='bg-black text-white flex flex-row p-4 justify-center items-center'>
        <p className=''>View the complete Kit</p>
        <FaArrowRight className='ml-2'/>
    </div>

    <header className='sticky top-0 bg-[#EAEEFE] z-50 overflow-hidden w-full'>
        <div className='flex flex-row w-full flex-wrap items-center justify-between p-5'>
            <Logo />
            <Navbar />
        </div>
    </header>
    </>
  )
}

export default Header