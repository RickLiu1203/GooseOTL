import React from 'react'
import Faculties from './Molecules/Faculties'
import Terms from './Molecules/Terms'

function FilterView() {
  return (
    <div className='flex flex-col w-full h-full px-6'>
        <Faculties />
        <Terms />
    </div>
  )
}

export default FilterView