'use client';

import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className='flex items-center justify-between pt-12 pb-8 w-full h-1/10 z-50 bg-slate-200'>
        <Image 
          src="/gooselogo.svg"
          alt="School Image"
          width={10}
          height={10}
          className='w-28 drop-shadow-lg'
        />
        <div className='flex w-full items-center text-black'>
          <div className='flex gap-8 text-lg'>
            <p>Map</p>
            <p>Compare</p>
            <p>Guides</p>
            <p>Github</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar