import React from 'react'
import { IoFilter } from "react-icons/io5";

function FilterButton() {
  return (
    <button className='flex justify-center items-center w-12 h-12 bg-white rounded-lg border-2 border-gray-200'>
        <IoFilter size={20}/>
    </button>
  )
}

export default FilterButton