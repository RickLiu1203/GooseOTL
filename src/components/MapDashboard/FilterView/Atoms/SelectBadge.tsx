import React from 'react'

interface Props{
    item: string;
    toggleSelection: () => void;
    selected: boolean;
    selectedStyle: string;
};

function SelectBadge({item, toggleSelection, selected, selectedStyle}: Props) {

    const defaultStyle = 'bg-white text-black border-[1px] border-white';

    const toggleStyle = selected ? selectedStyle : defaultStyle;

    return (
        <button onClick={toggleSelection} className={`flex justify-center items-center px-3 py-1 font-medium rounded-full text-sm shadow-sm ${toggleStyle}`}>
            {item}
        </button>
    )
}

export default SelectBadge