import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
     <div>
         <h1>404 NOT FOUND</h1>
      <Link href="/">GO BACK TO HOME</Link>
     </div>
    </div>
  )
}
