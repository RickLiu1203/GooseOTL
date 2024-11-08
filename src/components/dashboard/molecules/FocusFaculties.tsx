import React from 'react'
import FacultyTag from '../atoms/FocusView/FacultyTag';

interface Props{
    faculties: string[];
}

function FocusFaculties({faculties}: Props) {
  return (
    <div className='flex flex-wrap gap-4 pt-4'>
        {faculties.sort().map((faculty: string, index: number) => 
            <FacultyTag key={index} faculty={faculty} />
        )}
    </div>
  )
}

export default FocusFaculties