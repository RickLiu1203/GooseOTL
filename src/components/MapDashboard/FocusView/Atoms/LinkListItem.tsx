import { Dot, Link } from 'lucide-react';
import React from 'react'


interface LinkObject{
    text: string,
    url: string
}

interface Props{
  links: LinkObject[];
  showSubtitle: boolean;
}

function LinkListItem({links, showSubtitle}: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {showSubtitle && <h3 className='flex items-center gap-2 text-lg font-semibold text-neutral-800'>Links <Link size={16}/> </h3>}
      {links.map(({text, url}: LinkObject, index: number) =>
        <div key={index} className="flex items-center gap-1 text-slate-500 ps-2">
          <Dot size={28} className='flex flex-shrink-0'/>
          <a href={url} target='_blank' className='underline underline-offset-4'>{text}</a>
        </div>
      )}
    </div>
  )
}

export default LinkListItem