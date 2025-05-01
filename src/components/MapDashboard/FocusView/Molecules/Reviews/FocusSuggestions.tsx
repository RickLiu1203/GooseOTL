import React from 'react'
import ReviewSectionTitle from '../../Atoms/Reviews/ReviewSectionTitle'

interface Props{
    suggestions: string;
}

function FocusSuggestions({ suggestions }: Props) {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <ReviewSectionTitle title='Suggestions' icon='✏️' />
        <p className='text-neutral-500'>{suggestions}</p>
    </div>
  )
}

export default FocusSuggestions