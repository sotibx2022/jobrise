import { RenderChildren } from '@/app/interfaces/renderChildren'
import React from 'react'
const Center:React.FC<RenderChildren> = ({children}) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        {children}
    </div>
  )
}
export default Center