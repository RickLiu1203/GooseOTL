import React from 'react'
import Image from 'next/image'

function HeaderImage() {
  return (
        <Image 
        src="/library.jpg"
        alt="School Image"
        width={400}
        height={40}
        priority
        className='w-full h-4/10 object-cover'
        />
  )
}

export default HeaderImage