import React from 'react'

interface Props{
    title: string;
    icon: string;
}

function ReviewSectionTitle({ title, icon }: Props) {
  return (
        <h2 className='flex gap-2 items-center text-lg font-bold text-neutral-800'>
            <span className='underline underline-offset-4'>{title}</span>
            {/* <span>{icon}</span> */}
        </h2>
  )
}

export default ReviewSectionTitle