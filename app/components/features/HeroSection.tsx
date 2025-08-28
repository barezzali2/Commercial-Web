import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import logos from "@/public/logos.png"
import visual from "@/public/visual.png"
import cylindar from "@/public/cylinder.png"
import Button from '@/app/components/ui/Button'
import TopIndicator from '@/app/components/ui/TopIndicator'
import LogosMarquee from '@/app/components/ui/LogosMarquee'
import LearnMoreLink from '@/app/components/ui/LearnMoreLink'
import Marquee from "react-fast-marquee";



function HeroSection() {
  return (
    <>
      <div className='bg-gradient-to-b from-[#EAEEFE] to-[#183dc2c6] px-5 pb-15 pt-20 md:px-10 md:pt-20 md:flex'>
        <div>
          <TopIndicator className='border-2 border-gray-400 inline p-2 rounded-2xl'>Version 2.0 is here</TopIndicator>
          <h1 className='mt-10 mb-4 text-5xl font-semibold md:text-7xl'>Pathway to</h1>
          <h1 className='mb-8 text-5xl font-semibold text-[#001354] md:text-7xl'>Productivity</h1>
          <p className='w-80 text-balance text-xl mb-8 md:w-full'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
          
          <div className='mb-16 '>
          <Button className='text-white bg-black inline pt-2 pl-3 pr-3 pb-2 rounded-xl mr-5'>Get for free</Button>
          <LearnMoreLink>Learn more</LearnMoreLink>
          </div>
        </div>

        <div className='md:w-1/2 relative'>
          <Image 
          src={cylindar} 
          alt='cylindar'
          quality={80}
          className='hidden md:block md:absolute md:top-2 md:-left-0 md:w-26'
          />

          <Image 
          src={visual} 
          alt='Visual' 
          quality={80}
          sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
          className='mx-auto md:w-130 md:max-w-md'
           />
        </div>
      </div>
      
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
    </>
  )
}

export default HeroSection