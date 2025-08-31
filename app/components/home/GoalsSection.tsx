import React, { ReactElement } from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"

import productImage from "@/public/product-image.png"
import pyramid from "@/public/pyramid.png"
import torus from "@/public/torus.png"

import { LuLeaf } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { MdLockOutline } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

import TopIndicator from '@/app/components/ui/TopIndicator';
import TextLink from '@/app/components/ui/TextLink'



type Goal = {
  icon: ReactElement;
  title: string;
  description: string;
}

const goals: Goal[] = [
  {
    icon: <LuLeaf />,
    title: "Integration ecosystem",
    description: "Track your progress and motivate your efforts everyday.",
  },
  {
    icon: <GoGoal />,
    title: "Goal setting and tracking",
    description: "Set and track goals with manageable task breakdowns.",
  },
  {
    icon: <MdLockOutline />,
    title: "Secure data encryption",
    description: "Ensure your data’s safety with top-tier encryption.",
  },
  {
    icon: <IoNotificationsOutline />,
    title: "Customizable notifications",
    description: "Get alerts on tasks and deadlines that matter most.",
  }
]

export default function GoalsSection() {
  return (
    <motion.div 
    className='w-full justify-center bg-gradient-to-b from-[#ffffff] to-[#c8d4ff] pb-5 mt-20 md:mt-30'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.0 }}
    >

      {/* Top title and description */}
      <div className='text-center'>
        <TopIndicator className='border-2 border-gray-400 inline p-2 rounded-2xl'>Boost your productivity</TopIndicator>
        <h2 className='mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl'>A more effective way <span className='text-[#001354] block'>to track progress</span></h2>
        <p className='max-w-2xl mx-auto font-normal text-xl mb-8 text-[#010D3E] text-balance'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
      </div>


        {/* Images and shapes */}
        <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image 
        src={pyramid} 
        alt='pyramid-img' 
        className='hidden md:block md:absolute md:right-0 md:w-32 lg:w-40 lg:mt-40'
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image 
        src={torus} 
        alt='torus-img'
        className='hidden md:block md:absolute md:left-0 md:w-32 lg:w-40 md:mt-50 lg:mt-140'
        />
      </motion.div>

        <Image 
        src={productImage} 
        alt='product-image' 
        quality={90}
        sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 600px, 800px"
        className='w-full'
        />
      

        {/* Grid items */}
        <div className='grid overflow-hidden mt-8 mx-auto md:grid-cols-2 md:gap-0 lg:grid-cols-4 lg:mb-10 lg:mt-0'>
          {goals.map((goal: Goal, i: number) => (
            <motion.div 
                key={i} 
                className='m-12'
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                >
                <div className='text-2xl mb-[10px]'>{goal.icon}</div>
                <h4 className='text-xl font-bold mb-[10px]'>{goal.title}</h4>
                <p className='text-[16px] mb-[12px]'>{goal.description}</p>
                <TextLink href='#'>Learn more</TextLink>
            </motion.div>
          ))}
        </div>
    </motion.div>
  )
}