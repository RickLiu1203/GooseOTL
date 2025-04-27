import { ChevronRight } from 'lucide-react';
import React from 'react'
import Markdown from 'react-markdown'
interface Props{
  subtitle?: string;
  bulletTexts: string[];
}

function TextListItem({subtitle, bulletTexts}: Props) {
  return (
    <div className='flex flex-col gap-3 pb-1'>
      {subtitle && <h3 className='text-lg font-semibold text-neutral-800'>{subtitle}</h3>}
      {bulletTexts.map((bulletText: string, index: number) =>
        <div key={index} className="flex gap-1 text-gray-500 ps-4">
          <ChevronRight size={16} className='flex mt-1 flex-shrink-0'/>
          <Markdown>{bulletText}</Markdown>
        </div>
      )}
    </div>
  )
}

export default TextListItem