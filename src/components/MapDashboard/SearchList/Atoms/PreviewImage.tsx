import React from 'react'
import Image from 'next/image'

function PreviewImage() {
  return (
        <Image 
        src="/library.jpg"
        alt="School Image"
        width={400}
        height={40}
        className='absolute top-0 left-0 h-full w-1/3 object-cover rounded-l-xl'
        />
  )
}

export default PreviewImage