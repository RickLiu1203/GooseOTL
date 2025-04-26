import React from 'react'
import { RxTriangleRight } from "react-icons/rx";

interface Props{
  subtitle?: string;
  bulletTexts: string[];
}

function TextListItem({subtitle, bulletTexts}: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {subtitle && <h3 className='text-md font-medium'>{subtitle}</h3>}
      {bulletTexts.map((bulletText: string, index: number) =>
        <div key={index} className="flex gap-1 text-gray-500 ps-4">
          <RxTriangleRight size={20} className='flex flex-shrink-0'/>
          <p>{bulletText}</p>
        </div>
      )}
    </div>
  )
}

export default TextListItem