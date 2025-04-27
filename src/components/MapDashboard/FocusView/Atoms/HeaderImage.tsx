import React from 'react'
import Image from 'next/image'

function HeaderImage() {
  return (
        <Image 
        src="/zurich.jpg"
        alt="School Image"
        width={10000}
        height={40}
        className='fixed w-1/2 h-1/3 object-cover z-10'
        />
  )
}

export default HeaderImage