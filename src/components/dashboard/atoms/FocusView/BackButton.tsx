import React from 'react'

interface Props{
    backClick: () => void;
}

function BackButton({backClick}: Props) {
  return (
    <button onClick={backClick} className='absolute top-6 left-6 bg-white text-black border-2 border-black rounded-lg px-4 py-2 w-min'>
        back
    </button>
  )
}

export default BackButton