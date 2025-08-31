import React, { ReactElement } from 'react'
import Link from 'next/link';

import { FaInstagramSquare, FaTwitter, FaPinterest, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import Logo from '@/app/components/ui/Logo'



type SocialType = {
  icon: ReactElement,
  href?: string
}

// Icon collection
const socialIcons: SocialType[] = [
  {
    icon: <FaTwitter />
  },
  {
    icon: <FaInstagramSquare />
  },
  {
    icon: <FaPinterest />
  },
  {
    icon: <FaLinkedin />
  },
  {
    icon: <FaTiktok />
  },
  {
    icon: <FaYoutube />
  },
]

export default function Footer() {
  return (
    <div className='overflow-hidden bg-black text-white p-8 md:flex md:flex-row md:pr-5 lg:pr-5 lg:justify-between lg:py-10'>

      {/* Logo and social media icon stuff */}
      <div>
        <Logo />
        <p className='max-w-80 font-normal text-balance text-[#BCBCBC] mt-10 md:text-[15px]'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
        <div className='flex items-center gap-5 mt-10 md:mt-18'>
          {socialIcons.map((icon: SocialType, i: number) => (
            <a href='#' key={i} className='text-2xl text-[#808080]'>{icon.icon}</a>
          ))}
        </div>
      </div>


      {/* Links */}
      <div className='text-[#7B7B7B] mt-15 md:grid md:grid-cols-4 md:mt-0 md:gap-12 lg:gap-18'>
        <div className='flex flex-col gap-4 text-sm'>
          <h3 className='text-white'>Product</h3>
          <Link href="#">Features</Link>
          <Link href="#">Integrations</Link>
          <Link href="#">Updates</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Pricing</Link>
        </div>

        <div className='flex flex-col gap-4 mt-10 md:mt-0 text-sm'>
          <h3 className='text-white'>Company</h3>
          <Link href="#">About</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Manifesto</Link>
          <Link href="#">Press</Link>
          <Link href="#">Contact</Link>
        </div>

        <div className='flex flex-col gap-4 mt-10 md:mt-0 text-sm'>
          <h3 className='text-white'>Resources</h3>
          <Link href="#">Examples</Link>
          <Link href="#">Community</Link>
          <Link href="#">Guides</Link>
          <Link href="#">Docs</Link>
        </div>

        <div className='flex flex-col gap-4 mt-10 md:mt-0 text-sm'>
          <h3 className='text-white'>Legal</h3>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Security</Link>
        </div>
      </div>

    </div>
  )
}