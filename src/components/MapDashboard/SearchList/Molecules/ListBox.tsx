'use client';

import React from 'react'
import { useFocusContext } from '@/providers/FocusProvider'
import SubtitlesList from './SubtitlesList';
import PreviewImage from '../Atoms/PreviewImage';

interface Props{
    name: string;
    subtitleDataObj: SubtitleDataObj;

}

interface SubtitleDataObj{
    location: string;
    terms: string;
    levels: string;
}

function ListBox({name, subtitleDataObj}: Props) {
    const { setFocus } = useFocusContext();

    const handleClick = (id: number) => {
        console.log('click')
        setFocus(id); 
    };

    return (
        <div onClick={() => handleClick(1)} className='relative flex flex-row-reverse w-9/10 rounded-xl text-black border-gray-200 border-2 bg-white'>
            <PreviewImage />
            <div className='flex flex-col gap-2 w-2/3 p-4'>
                <h3 className='font-bold text-xl'>{name}</h3>
                <SubtitlesList subtitleDataObj={subtitleDataObj}/>
            </div>
        </div>
    )
}

export default ListBox