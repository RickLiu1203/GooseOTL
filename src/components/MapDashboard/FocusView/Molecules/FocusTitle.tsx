import React from 'react'
import SpotsIndicator from '../Atoms/SpotsIndicator';

interface Props{
    school: string;
    spotsObject: SpotsObject;
}

interface SpotsObject{
    likeliness: string;
    spots: number;
}

function FocusTitle({school, spotsObject}: Props) {
  return (
    <div className='flex justify-between items-center w-full'>
        <h1 className='text-3xl font-bold w-2/3'>{school}</h1>
        <SpotsIndicator likeliness={spotsObject.likeliness} spots={spotsObject.spots} />
    </div>
  )
}

export default FocusTitle