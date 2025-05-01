import React from 'react'
import ReviewSectionTitle from '../../Atoms/Reviews/ReviewSectionTitle'

interface Props{
    review: string;
}

function FocusWrittenReview({ review }: Props) {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <ReviewSectionTitle title='Review' icon='🗣️' />
        <p className='text-neutral-500'>{review}</p>
    </div>
  )
}

export default FocusWrittenReview