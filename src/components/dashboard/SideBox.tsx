'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import data from '../../../data/data.json';
import detailedData from '../../../data/datatest.json';
import { useFocusContext } from '../../providers/FocusProvider';
import FocusInfo from './FocusView/FocusedView';
import SearchList from './SearchList/SearchList';

function SideBox() {
    const { focused } = useFocusContext();
    return (
        <div className={`flex flex-col items-center bg-white h-full overflow-y-scroll no-scrollbar relative transition-all duration-300 ${focused ? "w-4/10" : "w-3/10"}`}>
            {focused ? (
                <FocusInfo schoolData={detailedData} />
            ) : (
                <SearchList 
                    schoolBasicData={data} 
                />
            )}
        </div>
    );
}

export default SideBox;
