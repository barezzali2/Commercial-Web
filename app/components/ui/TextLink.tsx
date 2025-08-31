import React, { ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa';


type LinkType = {
    children: ReactNode;
    className?: string;
    href: string

}

export default function TextLink({ children, href }: LinkType) {
  return (
    <a href={href}>
        {children} <FaArrowRight className='inline'/>
    </a>
  )
}