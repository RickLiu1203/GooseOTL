'use client';

import schoolData from '../../../../../data/datatest.json';
import { useFocusContext } from '../../../../providers/FocusProvider';
import FilterView from '../../FilterView/FilterView';
import FocusView from '../../FocusView/FocusedView';
import SearchList from '../../SearchList/SearchList';

function SideBox() {
    const { focused } = useFocusContext();
    return (
        <div className={`flex flex-col items-center bg-slate-100 h-full overflow-y-scroll no-scrollbar relative transition-all duration-500 w-full`}>
            {/* {focused ? (
                <FocusView schoolData={schoolData} />
            ) : (
                <SearchList 
                    schoolData={schoolData} 
                />
            )} */}
            <FilterView />
        </div>
    );
}

export default SideBox;
