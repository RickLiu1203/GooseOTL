import React, { useEffect, useState } from 'react'
import SelectBadge from '../Atoms/SelectBadge';
import { locationStyles } from '../BadgeStyles';
import SectionTitle from '../Atoms/SectionTitle';
import { unselectAllHelper } from '../FilterHelpers';
import UnselectAll from '../Atoms/UnselectAll';

import { PiGlobe } from "react-icons/pi";

interface Props{
    handleUpdate: (category: string, newArray: string[], counter: number) => void;
}

function Locations({handleUpdate}: Props) {

    interface Locations {
        [key: string]: boolean;
    }

    const initialLocations: Locations = {
        "UK & Ireland": false,
        "Western Europe": false,
        "Northern Europe": false,
        "Mediterranean": false,
        "Central Europe": false,
        "East Asia": false,
        "South & Southeast Asia": false,
        "Australia": false,
        "Caribbean": false
    };

    const [locationSelection, setLocationSelection] = useState<Locations>(initialLocations);
    const [selectedCount, setSelectedCount] = useState<number>(0);

    const toggleLocation = (location: string) => {
        locationSelection[location] ? setSelectedCount(prevCount => prevCount - 1) : setSelectedCount(prevCount => prevCount + 1)
        setLocationSelection(prev => ({
            ...prev,
            [location]: !prev[location],
        }));
    };

    const unselectAllLocations = () => {
        setLocationSelection(unselectAllHelper(locationSelection));
        setSelectedCount(0);
    }

    useEffect(() => {
        const trueLocations = Object.keys(locationSelection).filter(location => locationSelection[location]);
        handleUpdate('locations', trueLocations, selectedCount)
    }, [locationSelection]);

    return (
        <div className='flex flex-col w-full gap-8 pt-8'>
            <div className='flex w-full justify-between items-center'>
                <SectionTitle title={'Locations'} icon={<PiGlobe size={22}/>}/>
                <UnselectAll handleUnselect={unselectAllLocations}/>
            </div>
            <div className='flex flex-wrap gap-3 w-full h-min pb-3'>
                {Object.keys(locationSelection).map(location => (
                    <SelectBadge
                        key={location}
                        item={location}
                        toggleSelection={() => toggleLocation(location)}
                        selected={locationSelection[location]}
                        selectedStyle={locationStyles[location]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Locations;
