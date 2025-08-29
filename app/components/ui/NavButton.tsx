import Link from 'next/link';
import React, { ReactNode } from 'react'


type ButtonType = {
    children: ReactNode;
    className?: string,
    href: string
}

function NavButton({ children, className, href }: ButtonType) {
  return (
    <Link 
      href={href} 
      className={className}
      >
        {children}
    </Link>
  )
}

export default NavButton