import React from 'react';

interface Props {
    handleUnselect: () => void;
}

function UnselectAll({handleUnselect}: Props) {
    return (
        <button 
            onClick={handleUnselect} 
            className={`text-sm font-medium rounded-md px-2.5 py-1.5 shadow-sm bg-white text-black border-black border-[1px] hover:bg-slate-100 active:bg-slate-800 active:text-white duration-100`}
        >
            Unselect All
        </button>
    );
}

export default UnselectAll;
