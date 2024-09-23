'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <>
    <nav className='fixed w-full  flex justify-center py-5 text-white z-10 font-clash'>
      <div className=' border-2 rounded-full px-10 py-2 flex space-x-10 bg-indigo-950/65 '>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
       Home
      </Link>

      <Link
        className={`link ${pathname === '/sobre-nos' ? 'active' : ''}`}
        href="/sobre-nos"
      >
        About
      </Link>

      <Link
        className={`link ${pathname === '/precos' ? 'active' : ''}`}
        href="#"
      >
        Preços
      </Link>
      </div>
      
    </nav>
    
    </>
  )
}