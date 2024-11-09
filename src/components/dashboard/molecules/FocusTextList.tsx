import React from 'react'
import TextListItem from '../atoms/FocusView/TextListItem'

function FocusTextList({}) {
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-bold'>Term Dates</h2>
            <TextListItem subtitle='Undergrad' bulletTexts={['Minimum 70% Average','Completion of at least two years of university studies','Mandatory orientation before classes start']} />
            <TextListItem subtitle='Fall' bulletTexts={['September - December']} />
        </div>
    )
}

export default FocusTextList