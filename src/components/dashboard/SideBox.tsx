'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import data from '../../../data/data.json';
import detailedData from '../../../data/datatest.json'
import { useFocusContext } from '../../providers/FocusProvider';
import FocusInfo from './FocusInfo';
import SearchList from './SearchList';

function SideBox() {
    const { focused } = useFocusContext();
    const [searchString, setSearchString] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };

    return (
        <div className={`flex flex-col items-center bg-white h-full overflow-y-scroll transition-all duration-200 relative p-4 ${focused ? "w-1/3" : "w-1/4"}`}>
            {focused ? (
                <FocusInfo schoolDetailedData={detailedData}/>
            ) : (
                <SearchList 
                    schoolBasicData={data} 
                    searchString={searchString} 
                    onSearchChange={handleInputChange} 
                />
            )}
        </div>
    );
}

export default SideBox;
