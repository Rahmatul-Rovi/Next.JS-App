"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter();
    const isLOggedIn = false;
    const handleNavigation = () => {
        if(isLOggedIn){
           router.push("/about/address");
        }
     else {
      router.push("/");
    }
    }
   
  return (
    <div >
      <h2 className='text-4xl text-center'>About Page</h2>
     <p> <Link href="/about/address">
      Address Page
      </Link></p>
      <button type='button' onClick={handleNavigation}>Address Page</button>
    </div>
  )
}
