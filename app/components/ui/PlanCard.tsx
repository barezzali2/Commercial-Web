import React from 'react'
import NavButton from './NavButton';

type PlanCardProps = {
    title: string;
    price: string;
    period?: string;
    features: string[];
    popular?: boolean;
    buttonText: string;
}

function PlanCard({ title, price, period = "monthly", features, popular, buttonText}: PlanCardProps) {
  return (
    <div className={`rounded-2xl my-5 mx-auto w-[320px] p-12 flex flex-col gap-4 shadow-[0_3px_10px_-2px_rgba(0,0,0,0.2)] ${popular ? "bg-black text-white" : "bg-white text-black"} lg:h-fit`}>
        <div>
            <div className='flex flex-row justify-between items-center'>
            <h3 className='text-[#6F6C90] text-xl'>{title}</h3>
            {popular && (
                <span className={`p-2 border-2 border-gray-400 rounded-xl inline 
                    bg-gradient-to-r
                    from-[#DD7DFF]
                    via-[#E1CD86]
                    via-[#8BCB92]
                    via-[#71C2EF]
                    to-[#3BFFFF]
                    bg-clip-text text-transparent`}>Most Popular</span>
            )}
            </div>
            
            <p className='mt-5 text-4xl font-semibold'>
                {price}
                <span className='text-xl text-[#6F6C90]'>/{period}</span>
            </p>
        </div>

        <NavButton href='#' className={`mt-5 mb-5 mx-auto rounded-xl ${popular ? "bg-white text-black" : "bg-black text-white"} py-[10px] px-[20px]`}>
            {buttonText}
        </NavButton>

        <ul className='flex flex-col gap-6'>
            {features.map((feature, index) => (
                <li key={index} className='flex items-center gap-2'>
                    ✔️ <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PlanCard