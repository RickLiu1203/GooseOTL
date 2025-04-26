import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

interface Props{
    title: string
    toggleSection: () => void;
    collapsed: boolean
}

function SectionTitle({title, toggleSection, collapsed}: Props) {
  return (
    <button className={`flex w-full justify-between items-center pe-2 ${!collapsed && 'mb-2'}`} onClick={toggleSection}>
        <h2 className='text-xl font-semibold'>
            {title}
        </h2>
        {collapsed ?
        <ChevronDown /> : 
        <ChevronUp />
        }
    </button>
  )
}

export default SectionTitle