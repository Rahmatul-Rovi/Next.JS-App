import React from 'react'

export default function dashboardLayout( {children} ) {
  return (
    <div>
        <div className='grid grid-cols-12'>
            {/* Side Nav */}
            <div className='col-span-3'>
              
            </div>
            {/* Dashboard Content */}
            <div className='col-span-9'>
             {children}
            </div>

        </div>
      
    </div>
  )
}
