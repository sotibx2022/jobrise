import { RenderChildren } from '@/app/interfaces/renderChildren'
import React, { Children, ReactNode } from 'react'
import Center from './Center'
const Wrapper: React.FC<RenderChildren> = ({ children }) => {
    return (
        <section>
                {children}
        </section>
    )
}
export default Wrapper