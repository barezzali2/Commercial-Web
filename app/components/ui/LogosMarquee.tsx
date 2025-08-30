import React from 'react'
import Image, { StaticImageData } from 'next/image'
import acme from "@/public/logos/marquee-logos/acme.png"
import apex from "@/public/logos/marquee-logos/apex.png"
import celestia from "@/public/logos/marquee-logos/celestia.png"
import echo from "@/public/logos/marquee-logos/echo.png"
import pulse from "@/public/logos/marquee-logos/pulse.png"
import quantum from "@/public/logos/marquee-logos/quantum.png"


const logos: StaticImageData[] = [
    acme,
    apex,
    celestia,
    echo,
    pulse,
    quantum
]

const elements = [...logos, ...logos];

export default function LogosMarquee() {
  return (
    <>
      {elements.map((logo: StaticImageData, i: number) => (
        <div key={i} className="relative h-[25px] md:h-[30px] lg:h-[30px] overflow-hidden mx-5">
            <Image
            src={logo}
            alt="logoslist"
            height={100} 
            quality={80}
            className="object-contain object-center h-[100%] w-auto max-h-[100px]"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, (max-width: 1024px) 160px, 200px"
          />
          </div>
      ))}
    </>
  )
}