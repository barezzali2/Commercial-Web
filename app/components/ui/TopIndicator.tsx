import React, { ReactNode } from 'react'


type IndicatorType = {
    children: ReactNode;
    className: string;
}


export default function TopIndicator({children, className}: IndicatorType) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}