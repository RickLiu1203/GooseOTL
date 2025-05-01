import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

interface Props{
    collapsed: boolean;
    setCollapsed: () => void;
}

function CollapseIcon({ collapsed, setCollapsed }: Props) {
  return (
    <button className='flex justify-end items-center w-10' onClick={setCollapsed}>
        {collapsed ? 
        <ChevronDown /> :
        <ChevronUp />
        }
    </button>

  )
}

export default CollapseIcon