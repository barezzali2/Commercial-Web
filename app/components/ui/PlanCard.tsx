import React from 'react'
import Button from './Button';

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
    <div className={`rounded-2xl m-5 mx-auto w-[370px] p-12 flex flex-col gap-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] ${popular ? "bg-black text-white" : "bg-white text-black"}`}>
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
            
            <p className='mt-5 text-4xl'>
                {price}
                <span className='text-xl text-[#6F6C90]'>/{period}</span>
            </p>
        </div>

        <Button className={`mt-5 mb-5 mx-auto rounded-md ${popular ? "bg-white text-black" : "bg-black text-white"} p-2 pr-12 pl-12`}>{buttonText}</Button>

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