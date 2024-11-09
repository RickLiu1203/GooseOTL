import React from 'react'
import { FaChevronLeft } from "react-icons/fa";

interface Props{
    backClick: () => void;
}

function BackButton({backClick}: Props) {
  return (
    <button onClick={backClick} 
            className='absolute top-6 left-6 bg-white text-black text-lg font-bold rounded-lg p-3 shadow-lg'
    >
       <FaChevronLeft size={20}/>
    </button>
  )
}

export default BackButton