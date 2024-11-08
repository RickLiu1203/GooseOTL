'use client';

import React from 'react'
import { json } from 'stream/consumers';
import { useFocusContext } from '../../providers/FocusProvider'

interface Props {
    schoolDetailedData: Record<string, any>;
}

function FocusInfo({ schoolDetailedData }: Props) {
    const { setFocus, focusedId } = useFocusContext();

    const handleBackClick = () => {
        setFocus(null); 
    };

    return (
        <div className='text-black flex flex-col bg-slate-100 w-full h-full'>
            <button onClick={handleBackClick} className='text-black border-2 border-black rounded-lg px-4 py-2 w-min'>back</button>
            <h1 className='font-bold text-2xl'>
                {schoolDetailedData.name}
            </h1>
            <div>
                <h2 className='text-xl'>Likeliness&nbsp;-&nbsp;<span>{schoolDetailedData.likeliness.tier}</span></h2>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-xl'>Study Terms</h2>
                <div className='flex gap-2'>
                    {schoolDetailedData.studyTerms.map((term: string, index: number) => (
                        <p key={index}>{term}</p>
                    ))} 
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-xl'>Open To</h2>
                <div className='flex gap-2'>
                    {schoolDetailedData.openTo.map((program: string, index: number) => (
                        <p key={index}>{program}</p>
                    ))} 
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-xl'>Academic Levels</h2>
                <div className='flex gap-2'>
                    {schoolDetailedData.academicLevels.map((level: string, index: number) => (
                        <p key={index}>{level}</p>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default FocusInfo