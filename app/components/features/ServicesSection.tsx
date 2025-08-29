import React from 'react'
import Image, { StaticImageData } from 'next/image';
import shape1 from "@/public/cube-helix.png";
import shape2 from "@/public/cube-helix-square.png";
import TopIndicator from '../ui/TopIndicator';


type Shapes = {
    shape: StaticImageData;
    title: string;
    description: string;
}

const shapes: Shapes[] = [
    {
        shape: shape1,
        title: "Integration ecosystem",
        description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
    },
    {
        shape: shape2,
        title: "Goal setting and tracking",
        description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    }
]


function ServicesSection() {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <TopIndicator className='border-2 border-gray-400 inline p-2 rounded-2xl'>Everything you need</TopIndicator>
            <h2 className='mt-8 mb-6 text-3xl font-semibold text-balance md:text-4xl'>Streamlined for easy <span className='text-[#001354] block'>management</span></h2>
            <p className='w-full font-normal text-xl mb-8 px-9 text-[#010D3E] md:px-40 md:text-[18px]'>Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
        </div>


        <div className='grid justify-center text-center mt-10 lg:grid-cols-2 lg:mx-50 md:mt-15'>
            {shapes.map((shape: Shapes, i: number) => (
                <div key={i} className='mx-auto max-w-[408px] pt-8 pb-8 mt-5 rounded-xl shadow-[0_4px_10px_-1px_rgba(0,0,0,0.2)] md:max-w-[480px] md:m-5'>
                    <Image src={shape.shape} alt='shapes' className='mx-auto' quality={80} />
                    <h4 className='font-bold text-xl mt-3 mb-3'>{shape.title}</h4>
                    <p className='text-[#010D3E] px-9 md:px-13 lg:px-17'>{shape.description}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default ServicesSection