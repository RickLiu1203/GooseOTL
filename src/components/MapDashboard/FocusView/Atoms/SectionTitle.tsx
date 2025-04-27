import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

interface Props{
    title: string;
    icon: string;
    toggleSection: () => void;
    collapsed: boolean;
}

function SectionTitle({title, icon, toggleSection, collapsed}: Props) {
  return (
    <button className={`flex w-full justify-between items-center pe-2 text-neutral-800 ${!collapsed && 'mb-2'}`} onClick={toggleSection}>
        <h2 className='text-xl font-semibold'>
            <span className='pr-3'>{icon}</span>
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