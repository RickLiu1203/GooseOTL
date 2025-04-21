import React, { useEffect, useState } from 'react'
import SelectBadge from '../Atoms/SelectBadge';
import { levelStyles } from '../BadgeStyles';
import SectionTitle from '../Atoms/SectionTitle';
import FilterSpacer from '../Atoms/FilterSpacer';
import { unselectAllHelper } from '../FilterHelpers';
import UnselectAll from '../Atoms/UnselectAll';

import { PiGraduationCap } from "react-icons/pi";

interface Props{
    handleUpdate: (category: string, newArray: string[], counter: number) => void;
}

function StudyLevels({handleUpdate}: Props) {

    interface Levels {
        [key: string]: boolean;
    }

    const initialLevels: Levels = {
        'Undergraduate': false,
        'Graduate': false,
    };

    const [levelSelection, setLevelSelection] = useState<Levels>(initialLevels);
    const [selectedCount, setSelectedCount] = useState<number>(0);

    const toggleLevel = (level: string) => {
        levelSelection[level] ? setSelectedCount(prevCount => prevCount - 1) : setSelectedCount(prevCount => prevCount + 1)
        setLevelSelection(prev => ({
            ...prev,
            [level]: !prev[level],
        }));
    };

    const unselectAllLevels = () => {
        setLevelSelection(unselectAllHelper(levelSelection));
        setSelectedCount(0);
    }

    useEffect(() => {
        const trueLevels = Object.keys(levelSelection).filter(level => levelSelection[level]);
        handleUpdate('levels', trueLevels, selectedCount)
    }, [levelSelection]);

    return (
        <div className='flex flex-col w-full gap-8 pt-8'>
            <div className='flex w-full justify-between items-center'>
                <SectionTitle title={'Study Levels'} icon={<PiGraduationCap size={20}/>}/>
                <UnselectAll handleUnselect={unselectAllLevels}/>
            </div>
            <div className='flex flex-wrap gap-3 w-full h-min pb-3'>
                {Object.keys(levelSelection).map(level => (
                    <SelectBadge
                        key={level}
                        item={level}
                        toggleSelection={() => toggleLevel(level)}
                        selected={levelSelection[level]}
                        selectedStyle={levelStyles[level]}
                    />
                ))}
            </div>
            <FilterSpacer />
        </div>
    );
}

export default StudyLevels;
