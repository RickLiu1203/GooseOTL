// SearchList.tsx
'use client';

import { ChangeEvent, useState } from 'react';
import SearchBar from './Atoms/SearchBar';
import ListBox from './Molecules/SearchListBox';

interface SchoolBasicData {
    id: number;
    name: string;
    city: string;
    country: string;
    flag: string;
}

interface Props {
    schoolBasicData: SchoolBasicData[];
}

const SearchList = ({schoolBasicData}: Props) => {
    const [searchString, setSearchString] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };

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
        <div className='w-full'>
            <SearchBar searchString={searchString} onSearchChange={handleInputChange} />
            <ul className='flex flex-col items-center gap-4 w-full pt-20'>
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
        </div>
    );
};

export default SearchList;
