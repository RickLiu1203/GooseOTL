import React from 'react'

interface Props{
    title: string;
    rating: number;
}

function RatingValue({ title, rating }: Props) {
    const scaledRating = rating / 2;

    return (
        <div className='flex flex-col gap-1 w-4/10 text-neutral-800'>
            <p className='text-medium'>{title}</p>
            <p className='font-black italic'>{`${scaledRating} / 5`}</p>
        </div>
    )
}

export default RatingValue