import React from 'react'
import Logo from '@/app/components/ui/Logo'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa'


export default function Header() {
  return (
    <>
    <div className='bg-black text-white flex flex-row p-4 justify-center items-center'>
        <a href='#' className='flex items-center justify-center'>View the complete Kit <FaArrowRight className='ml-2'/></a>
    </div>

    <header className='sticky top-0 bg-[#EAEEFE] z-50 overflow-hidden w-full md:px-5'>
        <div className='flex flex-row w-full flex-wrap items-center justify-between p-5'>
            <Logo />
            <Navbar />
        </div>
    </header>
    </>
  )
}