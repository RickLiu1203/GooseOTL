import React from 'react'

interface Props{
    handleClear: () => void;
}

function ClearAll({handleClear}: Props) {
    return (
        <button onClick={handleClear} className='flex flex-none justify-center px-6 items-center py-2 bg-white rounded-lg shadow-sm text-lg font-semibold'>
            Clear All
        </button>
    )
}

export default ClearAll