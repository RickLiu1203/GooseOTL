import React, { useEffect, useState } from 'react'
import SelectBadge from '../Atoms/SelectBadge';
import { facultyStyles } from '../BadgeStyles';
import SectionTitle from '../Atoms/SectionTitle';
import FilterSpacer from '../Atoms/FilterSpacer';
import { unselectAllHelper } from '../FilterHelpers';
import UnselectAll from '../Atoms/UnselectAll';

import { PiBooks } from "react-icons/pi";

interface Props{
    handleUpdate: (category: string, newArray: string[], counter: number) => void;
    parentCount: number;
}

function Faculties({handleUpdate, parentCount}: Props) {

    interface Faculties {
        [key: string]: boolean;
    }

    const initialFaculties: Faculties = {
        Arts: false,
        Engineering: false,
        Environment: false,
        Health: false,
        Mathematics: false,
        Science: false,
    };

    const [facultySelection, setFacultySelection] = useState<Faculties>(initialFaculties);
    const [selectedCount, setSelectedCount] = useState<number>(0);

    const toggleFaculty = (faculty: string) => {
        facultySelection[faculty] ? setSelectedCount(prevCount => prevCount - 1) : setSelectedCount(prevCount => prevCount + 1)
        setFacultySelection(prev => ({
            ...prev,
            [faculty]: !prev[faculty],
        }));
    };

    const unselectAllFaculties = () => {
        setFacultySelection(unselectAllHelper(facultySelection));
        setSelectedCount(0);
    }

    useEffect(() => {
        const trueFaculties = Object.keys(facultySelection).filter(faculty => facultySelection[faculty]);
        handleUpdate('faculties', trueFaculties, selectedCount)
    }, [facultySelection]);

    useEffect(() => {
        if(parentCount === 0){
            unselectAllFaculties();
        }
    }, [parentCount])

    return (
        <div className='flex flex-col w-full gap-8 pt-8'>
            <div className='flex w-full justify-between items-center'>
                <SectionTitle title={'Faculties'} icon={<PiBooks size={20}/>}/>
                <UnselectAll handleUnselect={unselectAllFaculties}/>
            </div>
            <div className='flex flex-wrap gap-3 w-full h-min pb-3'>
                {Object.keys(facultySelection).map(faculty => (
                    <SelectBadge
                        key={faculty}
                        item={faculty}
                        toggleSelection={() => toggleFaculty(faculty)}
                        selected={facultySelection[faculty]}
                        selectedStyle={facultyStyles[faculty]}
                    />
                ))}
            </div>
            <FilterSpacer />
        </div>
    );
}

export default Faculties;
