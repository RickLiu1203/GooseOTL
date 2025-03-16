import React from 'react';

interface Props {
    selectAll: () => void;
    deselectAll: () => void;
    count: number;
    mapLength: number;
}

function SelectAll({ selectAll, deselectAll, count, mapLength }: Props) {
    const allSelected = count === mapLength;

    const handleSelectAll = () => {
        if (allSelected) {
            deselectAll()
        } else {
            selectAll();
        }
    };

    const selectedStyle = 'bg-black text-white';
    const unselectedStyle = 'bg-white text-black';

    return (
        <button 
            onClick={handleSelectAll} 
            className={`text-sm font-medium rounded-md px-2.5 py-1.5 shadow-sm ${allSelected ? selectedStyle : unselectedStyle}`}
        >
            {allSelected ? 'Unselect All' : 'Select All'}
        </button>
    );
}

export default SelectAll;
