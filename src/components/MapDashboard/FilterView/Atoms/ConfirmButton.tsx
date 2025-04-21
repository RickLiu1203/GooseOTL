import React from 'react'

interface Props{
    filterCounter: number;
    schoolCounter: number;
}

function ConfirmButton({filterCounter, schoolCounter}: Props) {
  return (
    <button className='flex flex-none flex-row items-center justify-center gap-4 mt-4 mb-6 w-full h-12 bg-black text-white font-semibold text-md rounded-lg'>
        <div>
            {filterCounter === 1 ? `Apply ${filterCounter} Filter` : `Apply ${filterCounter} Filters`}
        </div>
        <div>
            |
        </div>
        <div>
            {`${schoolCounter} Matching Schools`}
        </div>
    </button>
  )
}

export default ConfirmButton