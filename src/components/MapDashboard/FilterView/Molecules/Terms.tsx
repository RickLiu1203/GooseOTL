import React, { useEffect, useState } from 'react'
import SelectBadge from '../Atoms/SelectBadge';
import { termStyles } from '../BadgeStyles';
import SectionTitle from '../Atoms/SectionTitle';
import FilterSpacer from '../Atoms/FilterSpacer';
import { unselectAllHelper } from '../FilterHelpers';
import UnselectAll from '../Atoms/UnselectAll';

import { PiCalendarDots } from "react-icons/pi";

interface Props{
    handleUpdate: (category: string, newArray: string[], counter: number) => void;
}

function Terms({handleUpdate}: Props) {

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

    const toggleTerm = (term: string) => {
        termSelection[term] ? setSelectedCount(prevCount => prevCount - 1) : setSelectedCount(prevCount => prevCount + 1)
        setTermSelection(prev => ({
            ...prev,
            [term]: !prev[term],
        }));
    };

    const unselectAllTerms = () => {
        setTermSelection(unselectAllHelper(termSelection));
        setSelectedCount(0);
    }

    useEffect(() => {
        const trueTerms = Object.keys(termSelection).filter(term => termSelection[term]);
        handleUpdate('terms', trueTerms, selectedCount)
    }, [termSelection]);

    return (
        <div className='flex flex-col w-full gap-8 pt-8'>
            <div className='flex w-full justify-between items-center'>
                <SectionTitle title={'Terms'} icon={<PiCalendarDots size={20}/>}/>
                <UnselectAll handleUnselect={unselectAllTerms}/>
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
