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
            <div className="w-48">
                <SectionTitle title="Page Select" icon="💻" />
                <Select value={current} onValueChange={handleChange} defaultValue='school'>
                    <SelectTrigger className='h-10 mt-6 mb-12 font-semibold text-base ring-0 focus:ring-0 focus:ring-offset-0 focus:outline-none shadow-smallBtn border-[1px] border-neutral-800'>
                        <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent className='bg-neutral-800 text-white'>
                        <SelectItem value="school" className='text-base font-semibold'>📝&nbsp; School Info</SelectItem>
                        <SelectItem value="destination" className='text-base font-semibold'>📍&nbsp; Destination Info</SelectItem>
                        <SelectItem value="review" className='text-base font-semibold'>⭐️&nbsp; Reviews</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}

export default FocusPageSelect
