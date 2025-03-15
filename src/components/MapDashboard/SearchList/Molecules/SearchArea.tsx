import React, { ChangeEvent } from 'react'
import SearchBar from '../Atoms/SearchBar'
import FilterButton from '../Atoms/FilterButton';

interface Props{
    searchString: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchArea({searchString, onSearchChange}: Props) {
  return (
    <div className='flex flex-row justify-center w-9/10 space-between gap-1 py-4'>
        <SearchBar searchString={searchString} onSearchChange={onSearchChange} />
        <FilterButton />
    </div>
  )
}

export default SearchArea