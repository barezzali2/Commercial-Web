import React from 'react'
import TopIndicator from '../ui/TopIndicator'
import PlanCard from '../ui/PlanCard'


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



function PlansSection() {
  return (
    <div className='mt-30 justify-center'>
      <div className='text-center'>
        <TopIndicator className='border-2 border-gray-400 inline p-2 rounded-2xl'>Boost your productivity</TopIndicator>
        <h2 className='mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl'>A more effective way <span className='text-[#001354] block'>to track progress</span></h2>
        <p className='w-full text-xl mb-8 px-9 text-[#010D3E] md:px-30 md:text-[18px]'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
      </div>


      <div className='grid lg:grid-cols-3 md:mt-10'>
        {plans.map((plan, i) => (
          <PlanCard {...plan} key={i} />
        ))}
      </div>

    </div>
  )
}

export default PlansSection