import React from 'react'

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
    <div className='flex justify-between'>
        <h1></h1>
    </div>
  )
}

export default FocusTitle