import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import Marquee from "react-fast-marquee";

import visual from "@/public/visual.png"
import cylindar from "@/public/cylinder.png"
import halfTorus from "@/public/half-torus.png"

import NavButton from '@/app/components/ui/NavButton'
import TopIndicator from '@/app/components/ui/TopIndicator'
import LogosMarquee from '@/app/components/ui/LogosMarquee'
import TextLink from '@/app/components/ui/TextLink'



export default function HeroSection() {
  return (
    <div className='w-full'>

      {/* Left and right Side contents */}
      <motion.div 
      className='overflow-hidden bg-gradient-to-b from-[#EAEEFE] to-[#183dc2c6] px-5 pb-15 pt-20 md:px-10 md:pt-20 md:flex'
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
      >
        <div>
          <TopIndicator className='border-2 border-gray-400 inline p-2 rounded-2xl'>Version 2.0 is here</TopIndicator>
          <h1 className='mt-10 mb-4 text-5xl font-semibold md:text-7xl'>Pathway to</h1>
          <h1 className='mb-8 text-5xl font-semibold text-[#001354] md:text-7xl'>Productivity</h1>
          <p className='w-80 font-normal text-balance text-[18px] mb-8 md:w-full lg:max-w-[70%]'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
          
          <div className='mb-16 lg:mt-12'>
          <NavButton href='#' className='text-white bg-black inline pt-[10px] pl-[15px] pr-[15px] pb-[10px] rounded-[10px] mr-5'>Get for free</NavButton>
          <TextLink href='#'>Learn more</TextLink>
          </div>
        </div>

        <motion.div 
        className='md:w-1/2 lg:w-3/3 relative'
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        >
          
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image 
                src={cylindar} 
                alt='cylindar'
                quality={80}
                className='hidden md:block md:absolute md:top-0 md:mt-[-50px] md:-left-0 md:w-40 lg:w-45 lg:-left-5 lg:mt-[-20px]'
            />
        </motion.div>


        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <Image 
                src={visual} 
                alt='Visual' 
                quality={85}
                className='mx-auto w-[388px] md:w-[648px] md:max-w-md lg:max-w-lg'
            />
        </motion.div>


        <motion.div
          animate={{ 
            rotate: [0, 0, 0, -10, 0],  // slow back-and-forth rotation
            y: [0, -15, 0, 15, 0]       // floating up and down
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
           <Image 
              src={halfTorus} 
              alt='Half-Torus'
              quality={80}
              className='hidden lg:block lg:absolute lg:w-45 lg:-bottom-20 lg:right-0'
          />
        </motion.div>

        </motion.div>
      </motion.div>
      

      {/* Moving logos using marquee element */}
      <div className="relative mx-auto mt-3 overflow-hidden bg-white">
        <div className="flex justify-center relative p-10">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#ffffff] to-transparent z-10 h-full"></div>
          <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-[#ffffff] to-transparent z-10 h-full"></div>
          
          <Marquee className='justify-center' delay={1} speed={60} loop={0}>
            <LogosMarquee />
          </Marquee>
        </div>
      </div>

    </div>
  )
}