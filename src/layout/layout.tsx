import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/layout/header'

type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Header />
        {children}
      </div>
    )
  }
)
