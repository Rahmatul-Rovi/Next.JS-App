import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav className='flex justify-center'>
          <ul className='flex justify-between gap-10'>
            <Link href="/">
             <li>Home</li>
            </Link>

             <Link href="/services">
            <li>Services</li>
            </Link>

             <Link href="/about">
            <li>About</li>
            </Link>
          
          </ul>
        </nav>
  )
}
