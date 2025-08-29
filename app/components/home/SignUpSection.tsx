import React from 'react'
import NavButton from '@/app/components/ui/NavButton'
import TextLink from '@/app/components/ui/TextLink'
import Image from 'next/image'
import emojiStar from "@/public/emojistar.png"
import helix from "@/public/helix.png"

function SignUpSection() {
  return (
    <div className='w-full relative overflow-hidden mt-20 flex flex-col items-center text-center bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] pb-20 md:mt-30 md:p-20'>
        
        <h2 className='mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl'>Sign up for <span className='text-[#001354]'>free today</span></h2>
        <p className='w-full font-normal text-xl mb-8 px-9 text-[#010D3E] md:px-40 md:text-[18px]'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>

        <Image 
        src={emojiStar} 
        alt='star' 
        className='hidden md:block md:absolute md:left-[-120px] md:-translate-y-12 md:w-65'
        />
        <Image 
        src={helix} 
        alt='helix'
        className='hidden md:block md:absolute md:right-[-100px] md:translate-y-12 md:w-65'
        />
        <div className='flex items-center justify-center gap-3'>
          <NavButton href='#' className='text-white bg-black inline pt-[10px] pl-[15px] pr-[15px] pb-[10px] rounded-[10px] mr-5'>Get for free</NavButton>
          <TextLink href='#'>Learn more</TextLink>
        </div>
       
    </div>
  )
}

export default SignUpSection