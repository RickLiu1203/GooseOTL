import React from 'react'
import { useSidebarContext } from '@/providers/SidebarProvider';
import { PiArrowBendUpRightBold } from 'react-icons/pi'

function FilterNavHeader() {
    const { setSidebarState } = useSidebarContext();

    const handleClick = () => {
        setSidebarState("list", null);
    };

    return (
        <button onClick={handleClick} className='flex justify-between px-6 items-center w-full py-2 bg-white rounded-lg shadow-sm'>
            <div className='text-lg font-semibold'>
                Return
            </div>
            <PiArrowBendUpRightBold size={20}/>
        </button>
    )
}

export default FilterNavHeader