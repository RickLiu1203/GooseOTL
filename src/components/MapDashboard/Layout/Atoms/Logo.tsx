import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
        <Image 
        src="/gooselogo.svg"
        alt="School Image"
        width={4}
        height={4}
        className='w-14 drop-shadow-lg'
        />
  )
}

export default Logo