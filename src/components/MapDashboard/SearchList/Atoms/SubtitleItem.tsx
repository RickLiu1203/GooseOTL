import React from 'react'
import { IconType } from 'react-icons';

interface Props{
    icon: IconType;
    text: string;
}

function SubtitleItem({icon: Icon, text}: Props) {
  return (
    <div className='flex gap-2'>
        <Icon size={20} className='flex-none'/>
        <p className='flex-none'>{text}</p>
    </div>
  )
}

export default SubtitleItem