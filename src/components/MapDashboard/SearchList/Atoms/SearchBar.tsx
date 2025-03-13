'use client';

import { ChangeEvent } from 'react'

interface Props{
    searchString: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function  SearchBar({searchString, onSearchChange}: Props) {
    return (
        <div className='flex items-end justify-center w-9/10 pt-6 pb-8 z-50 bg-slate-100 border-b-2 border-b-gray-200'>
            <input 
                className='text-black text-lg font-medium placeholder-black w-full outline-none h-12 border-gray-200 border-2 rounded-lg px-4' 
                type='text' 
                value={searchString} 
                placeholder="Search for a School"
                onChange={onSearchChange} 
            />
        </div>
    )
}

export default SearchBar