import React, { useEffect, useState } from 'react'
import SelectBadge from '../Atoms/SelectBadge';
import { termStyles } from '../BadgeStyles';
import SectionTitle from '../Atoms/SectionTitle';
import FilterSpacer from '../Atoms/FilterSpacer';
import SelectAll from '../Atoms/SelectAll';
import { selectAll, deselectAll } from '../FilterHelpers';

import { PiCalendarDots } from "react-icons/pi";

function Terms() {

    interface Terms {
        [key: string]: boolean;
    }

    const initialTerms: Terms = {
        'Fall': false,
        'Winter': false,
        'Spring/Summer': false,
    };

    const [termSelection, setTermSelection] = useState<Terms>(initialTerms);
    const [selectedCount, setSelectedCount] = useState<number>(0);

    const mapLength = Object.keys(termSelection).length;

    const toggleTerm = (term: string) => {
        termSelection[term] ? setSelectedCount(prevCount => prevCount - 1) : setSelectedCount(prevCount => prevCount + 1)
        setTermSelection(prev => ({
            ...prev,
            [term]: !prev[term],
        }));
    };

    const selectAllTerms = () => {
        setTermSelection(selectAll(termSelection));
        setSelectedCount(mapLength);
    }

    const deselectAllTerms = () => {
        setTermSelection(deselectAll(termSelection));
        setSelectedCount(0);
    }

    useEffect(() => {
        console.log(termSelection);
    }, [termSelection]);

    return (
        <div className='flex flex-col w-full gap-5 pt-6'>
            <div className='flex w-full justify-between items-center'>
                <SectionTitle title={'Terms'} icon={<PiCalendarDots size={20}/>}/>
                <SelectAll selectAll={() => selectAllTerms()} deselectAll={() => deselectAllTerms()} count={selectedCount} mapLength={mapLength}/>
            </div>
            <div className='flex flex-wrap gap-3 w-full h-min pb-3'>
                {Object.keys(termSelection).map(term => (
                    <SelectBadge
                        key={term}
                        item={term}
                        toggleSelection={() => toggleTerm(term)}
                        selected={termSelection[term]}
                        selectedStyle={termStyles[term]}
                    />
                ))}
            </div>
            <FilterSpacer />
        </div>
    );
}

export default Terms;
