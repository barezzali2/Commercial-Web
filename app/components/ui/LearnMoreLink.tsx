import React, { ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa';

type LinkType = {
    children: ReactNode;
    className?: string
}

function LearnMoreLink({ children }: LinkType) {
  return (
    <a href='#'>
        {children} <FaArrowRight className='inline'/>
    </a>
  )
}

export default LearnMoreLink