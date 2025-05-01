import React from 'react'
import UserLogo from '../../Atoms/Reviews/UserLogo';
import { Star } from 'lucide-react';

interface Props{
    name: string;
    program: string;
    exchangeTerm: string;
    exchangeTime: string;
}

function FocusReviewHead({ name, program, exchangeTerm, exchangeTime }: Props) {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <UserLogo />
            <h2 className='text-2xl text-neutral-800 font-bold'>{name}</h2>
            <div className='flex items-center gap-2 text-neutral-800 font-medium text-lg pl-2'> 
                <p className='italic'>4.5</p>
                <Star opacity={0.7} size={20} fill={"orange"} color='transparent'/>
            </div>
        </div>
        <div className='flex flex-col gap-1 text-neutral-500'>
            <p>{program}</p>
            <p>Studied Abroad in {exchangeTime} ({exchangeTerm})</p>
        </div>  
    </div>
  )
}

export default FocusReviewHead