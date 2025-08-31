import React from 'react'
import * as motion from "motion/react-client"
import TopIndicator from '@/app/components/ui/TopIndicator'
import PlanCard from '@/app/components/ui/PlanCard'



// An array of plan items
const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support"
    ],
    buttonText: "Get started for free"
  },

  {
    title: "Pro",
    price: "$9",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support"
    ],
    buttonText: "Sign up now",
    popular: true
  },

  {
    title: "Business",
    price: "$19",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features"
    ],
    buttonText: "Sign up now",
  }
]



export default function PlansSection() {
  return (
    <motion.div
      className='w-full mt-30 justify-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
    >

      <div className='text-center'>
        <TopIndicator className='border-2 border-gray-400 inline p-2 rounded-2xl'>Boost your productivity</TopIndicator>
        <h2 className='mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl'>A more effective way <span className='text-[#001354] block'>to track progress</span></h2>
        <p className='max-w-2xl mx-auto font-normal text-xl mb-8 text-[#010D3E] text-balance'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
      </div>


      {/* Iterating through the array and calling card component */}
      <motion.div 
        className='grid grid-cols-1 md:mt-10 lg:grid-cols-3 items-end'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.0 }}
        >
          {plans.map((plan, i) => (
            <PlanCard {...plan} key={i} />
          ))}
      </motion.div>

    </motion.div>
  )
} 