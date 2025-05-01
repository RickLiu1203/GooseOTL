import React, { useState } from 'react'
import PageSpacer from '../Atoms/PageSpacer'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import SectionTitle from '../../FilterView/Atoms/SectionTitle'

function FocusPageSelect() {
    const [current, setCurrent] = useState("school")

    const handleChange = (value: string) => {
        setCurrent(value)
    }

    return (
        <>
            <div className="w-2/3">
                <Select value={current} onValueChange={handleChange} defaultValue='school'>
                    <SelectTrigger className='h-10 bg-neutral-100 font-semibold text-base ring-0 border-none shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none'>
                        <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent className='bg-neutral-800 text-white'>
                        <SelectItem value="school" className='text-base font-semibold'>📝&nbsp; School Info</SelectItem>
                        <SelectItem value="destination" className='text-base font-semibold'>📍&nbsp; Destination Info</SelectItem>
                        <SelectItem value="review" className='text-base font-semibold'>⭐️&nbsp; Reviews</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <PageSpacer />
        </>
    )
}

export default FocusPageSelect
