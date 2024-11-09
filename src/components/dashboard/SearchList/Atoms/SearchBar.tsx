'use client';

import { ChangeEvent } from 'react'

interface Props{
    searchString: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({searchString, onSearchChange}: Props) {
    return (
        <div className='flex items-end justify-center fixed w-3/10 p-4'>
            <input 
                className='text-black text-lg font-medium placeholder-black w-full h-12 bg-slate-100 rounded-lg px-4' 
                type='text' 
                value={searchString} 
                placeholder="Search for a School"
                onChange={onSearchChange} 
            />
        </div>
    )
}

export default SearchBar