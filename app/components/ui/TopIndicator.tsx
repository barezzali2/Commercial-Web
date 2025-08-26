import React, { ReactNode } from 'react'


type IndicatorType = {
    children: ReactNode;
    className: string;
}


function TopIndicator({children, className}: IndicatorType) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default TopIndicator