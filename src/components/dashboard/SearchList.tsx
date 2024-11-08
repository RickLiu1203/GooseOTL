// SearchList.tsx
'use client';

import { ChangeEvent } from 'react';
import ListBox from './ListBox';

interface SchoolBasicData {
    id: number;
    name: string;
    city: string;
    country: string;
    flag: string;
}

interface Props {
    schoolBasicData: SchoolBasicData[];
    searchString: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchList = ({ schoolBasicData, searchString, onSearchChange }: Props) => {
    const filteredData = schoolBasicData.filter((schoolBasicData: SchoolBasicData) => {
        const searchLower = searchString.toLowerCase();
        if (searchLower.length >= 3) {
            return (
                schoolBasicData.name.toLowerCase().includes(searchLower) ||
                schoolBasicData.city.toLowerCase().includes(searchLower) ||
                schoolBasicData.country.toLowerCase().includes(searchLower)
            );
        }
    });

    return (
        <>
            <input 
                className='border-black border-2 text-black placeholder-black w-full mb-4' 
                type='text' 
                value={searchString} 
                placeholder="Where to?"
                onChange={onSearchChange} 
            />
            <ul className='flex flex-col items-center gap-4 w-full pt-1'>
                {filteredData.map((schoolBasicData: SchoolBasicData) => (
                    <ListBox 
                        key={schoolBasicData.id}
                        id={schoolBasicData.id} 
                        name={schoolBasicData.name}
                        location={`${schoolBasicData.city}, ${schoolBasicData.country}`}
                        flag={schoolBasicData.flag}
                    />
                ))}
            </ul>
        </>
    );
};

export default SearchList;
