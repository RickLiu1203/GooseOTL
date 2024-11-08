'use client';

import React from 'react'
import { useFocusContext } from '@/providers/FocusProvider'

interface Props{
    id: number,
    name: string;
    location: string;
    flag: string;
}

function ListBox({id, name, location, flag}: Props) {
    const { setFocus } = useFocusContext();

    const handleClick = (id: number) => {
        console.log('click')
        setFocus(id); 
    };

    return (
        <div key={id} onClick={() => handleClick(id)} className='h-40 w-96 p-4 rounded-lg text-black border-gray-200 border-2'>
            <div className='flex flex-col gap-1'>
                <h3 className='font-bold text-xl'>{name}</h3>
                <p className='text-base font-medium'>
                    {location}
                    <span className='ms-2'>{flag}</span>
                </p>
            </div>
        </div>
    )
}

export default ListBox