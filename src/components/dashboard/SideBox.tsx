'use client';

import schoolData from '../../../data/datatest.json';
import { useFocusContext } from '../../providers/FocusProvider';
import FocusInfo from './FocusView/FocusedView';
import SearchList from './SearchList/SearchList';

function SideBox() {
    const { focused } = useFocusContext();
    return (
        <div className={`flex flex-col items-center bg-slate-100 h-full overflow-y-scroll no-scrollbar relative transition-all duration-500 ${focused ? "w-1/2" : "w-4/10"}`}>
            {focused ? (
                <FocusInfo schoolData={schoolData} />
            ) : (
                <SearchList 
                    schoolData={schoolData} 
                />
            )}
        </div>
    );
}

export default SideBox;
