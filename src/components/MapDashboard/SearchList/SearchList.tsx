'use client';

import { ChangeEvent, useState } from 'react';
import ListBox from './Molecules/ListBox';
import SearchArea from './Molecules/SearchArea';

interface Props {
    schoolData: Record<string, any>;
}

const SearchList = ({schoolData}: Props) => {
    const [searchString, setSearchString] = useState<string>('');
    
    const subtitleData: {
        location: string;
        terms: string;
        levels: string;
    } = {
        location: schoolData.location,
        terms: schoolData.studyTerms.join(", "),
        levels: schoolData.academicLevels.join(", "),
    };
    

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };

    // const filteredData = schoolData.filter((schoolData: Record<string, any>) => {
    //     const searchLower = searchString.toLowerCase();
    //     if (searchLower.length >= 3) {
    //         return (
    //             schoolData.name.toLowerCase().includes(searchLower) ||
    //             schoolData.location.toLowerCase().includes(searchLower)
    //         );
    //     }
    // });

    return (
        <div className='flex flex-col items-center w-full h-full relative overflow-y-hidden'>
            <SearchArea searchString={searchString} onSearchChange={handleInputChange} />
            <ul className='flex flex-col items-center gap-4 w-full h-full overflow-y-auto'>
                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                                <ListBox 
                    // key={schoolData.id}
                    // id={schoolData.id} 
                    name={schoolData.name}
                    subtitleDataObj={subtitleData}
                />
                
            </ul>
        </div>
    );
};

export default SearchList;
