'use client';

import { ChangeEvent } from 'react'

interface Props{
    searchString: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({searchString, onSearchChange}: Props) {
    return (
        <div className='flex items-end justify-center w-9/10 z-50 bg-slate-100'>
            <input 
                className='text-black text-base font-medium placeholder-black w-full outline-none h-12 border-gray-200 border-2 rounded-lg px-4' 
                type='text' 
                value={searchString} 
                placeholder="Search for a School"
                onChange={onSearchChange} 
            />
        </div>
    )
}

export default SearchBar