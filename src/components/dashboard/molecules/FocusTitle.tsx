import React from 'react'
import SpotsIndicator from '../atoms/FocusView/SpotsIndicator';

interface Props{
    school: string;
    spotsObj: SpotsObj;
}

interface SpotsObj{
    tier: string;
    spots: number;
}

function FocusTitle({school, spotsObj}: Props) {
  return (
    <div className='flex justify-between items-start w-full'>
        <h1 className='text-3xl font-bold w-2/3'>{school}</h1>
        <SpotsIndicator tier={spotsObj.tier} spots={spotsObj.spots} />
    </div>
  )
}

export default FocusTitle