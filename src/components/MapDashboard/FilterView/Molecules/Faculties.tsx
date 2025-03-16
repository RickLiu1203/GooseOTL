import React, { useEffect, useState } from 'react'
import SelectBadge from '../Atoms/SelectBadge';
import { facultyStyles } from '../BadgeStyles';
import SectionTitle from '../Atoms/SectionTitle';
import FilterSpacer from '../Atoms/FilterSpacer';
import SelectAll from '../Atoms/SelectAll';
import { selectAll, deselectAll } from '../FilterHelpers';

import { PiGraduationCapFill } from "react-icons/pi";

function Faculties() {

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

    const mapLength = Object.keys(facultySelection).length;

    const toggleFaculty = (faculty: string) => {
        facultySelection[faculty] ? setSelectedCount(prevCount => prevCount - 1) : setSelectedCount(prevCount => prevCount + 1)
        setFacultySelection(prev => ({
            ...prev,
            [faculty]: !prev[faculty],
        }));
    };

    const selectAllFaculties = () => {
        setFacultySelection(selectAll(facultySelection));
        setSelectedCount(mapLength);
    }

    const deselectAllFaculties = () => {
        setFacultySelection(deselectAll(facultySelection));
        setSelectedCount(0);
    }

    useEffect(() => {
        console.log(facultySelection);
    }, [facultySelection]);

    return (
        <div className='flex flex-col w-full gap-5 pt-6'>
            <div className='flex w-full justify-between items-center'>
                <SectionTitle title={'Faculties'} icon={<PiGraduationCapFill size={20}/>}/>
                <SelectAll selectAll={() => selectAllFaculties()} deselectAll={() => deselectAllFaculties()} count={selectedCount} mapLength={mapLength}/>
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
