import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/layout/header/header'

// @ts-ignore
import s from './layout.module.css'
type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>(({ className, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={s.layout}>
      <Header />
      <Outlet />
    </div>
  )
})
