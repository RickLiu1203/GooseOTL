import React from 'react'
import FacultyTag from '../Atoms/FacultyTag';
import PageSpacer from '../Atoms/PageSpacer';

interface Props{
    faculties: string[];
}

function FocusFaculties({faculties}: Props) {
  return (
    <>
      <div className='flex flex-wrap gap-4 pt-2'>
          {faculties.sort().map((faculty: string, index: number) => 
              <FacultyTag key={index} faculty={faculty} />
          )}
      </div>
      <PageSpacer />
    </>
  )
}

export default FocusFaculties