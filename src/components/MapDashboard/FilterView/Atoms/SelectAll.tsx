import React, { useEffect, useState } from 'react'

interface Props{
    selectAll: () => void;
    deselectAll: () => void;
    count: number;
    mapLength: number;
}

function SelectAll({selectAll, deselectAll, count, mapLength}: Props) {
    const [selectedAll, setSelectedAll] = useState<boolean>(false);
    
    const handleSelectAll = () => {
        setSelectedAll(!selectedAll);
    }

    useEffect(() => {
        if(count === mapLength){
            setSelectedAll(true)
        } else {
            setSelectedAll(false)
        }
    }, [count])

    useEffect(() => {
        if(selectedAll){
            selectAll();
        } else if(count === mapLength){
            deselectAll();
        }
    }, [selectedAll])

    const selectedStyle = 'bg-black text-white'
    const unselectedStyle = 'bg-white text-black'

    return (
        <button onClick={handleSelectAll} className={`text-sm font-medium rounded-md px-2.5 py-1.5 shadow-sm ${selectedAll ? selectedStyle : unselectedStyle}`}>
            {selectedAll ? 'Unselect All': 'Select All'}
        </button>
    )
}

export default SelectAll