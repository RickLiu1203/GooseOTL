import React, { ReactNode } from 'react'

interface Props{
    title: string;
    icon: ReactNode;
}

function SectionTitle({title, icon}: Props) {
  return (
    <div className='flex items-center gap-2 h-min'>
        <div className='flex items-center justify-center'>
            {icon}
        </div>
        <h1 className='font-semibold text-xl h-min'>{title}</h1>
    </div>  
    )
}

export default SectionTitle