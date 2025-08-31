import React from 'react'
import * as motion from "motion/react-client" 
import Image from 'next/image'

import emojiStar from "@/public/emojistar.png"
import helix from "@/public/helix.png"

import NavButton from '@/app/components/ui/NavButton'
import TextLink from '@/app/components/ui/TextLink'

export default function SignUpSection() {
  return (
    <motion.div 
      className='w-full relative overflow-hidden mt-20 flex flex-col items-center text-center bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] pb-20 md:mt-25 md:p-20'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
      >
        
        <h2 className='mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl'>Sign up for <span className='text-[#001354]'>free today</span></h2>
        <p className='max-w-2xl mx-auto font-normal text-xl mb-8 text-[#010D3E] text-balance md:text-[18px]'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>


        <motion.div
          className='hidden md:block md:absolute md:left-[-120px] md:-translate-y-12 md:w-65 lg:left-[0px]'
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
            <Image 
            src={emojiStar} 
            alt='star' 
            />
        </motion.div>



        <motion.div
          className='hidden md:block md:absolute md:right-[-100px] md:translate-y-12 md:w-65 lg:right-[0px]'
          animate={{ 
            y: [0, -20, 0, 20, 0],
            rotate: [0, 15, 0, -15, 0],
            x: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        >
            <Image 
            src={helix} 
            alt='helix'
            />
        </motion.div>


        <div className='flex items-center justify-center gap-3'>
          <NavButton href='#' className='text-white bg-black inline pt-[10px] pl-[15px] pr-[15px] pb-[10px] rounded-[10px] mr-5'>Get for free</NavButton>
          <TextLink href='#'>Learn more</TextLink>
        </div>
       
    </motion.div>
  )
}