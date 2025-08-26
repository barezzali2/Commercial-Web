import React, { ReactNode } from 'react'

type ButtonType = {
    children: ReactNode;
    className: string
}


function Button({ children, className }: ButtonType) {
  return (
    <button className={className}>
        {children}
    </button>
  )
}

export default Button