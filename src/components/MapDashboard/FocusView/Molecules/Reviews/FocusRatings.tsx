import React from 'react'
import RatingValue from '../../Atoms/Reviews/RatingValue'
import ReviewSectionTitle from '../../Atoms/Reviews/ReviewSectionTitle';

interface reviewObject{
    name: string;
    exchangeTerm: string;
    exchangeTime: string;
    ratings: {
        campus: number;
        social: number;
        local: number;
        travel: number;
    };
    review: string;
    suggestions: string;
}


interface Props{
    review: reviewObject;
}

function FocusRatings({ review }: Props) {

    const titleMap: {[key: string]: string} = {
        "campus": "Campus",
        "social": "Social Life",
        "local": "Local Fun",
        "travel": "Places to Travel"
    }

    return (
    <div className='flex flex-col gap-4'>
        <ReviewSectionTitle title='Ratings' icon="🌟" />
        <div className='flex flex-wrap w-full gap-4'>
            {Object.entries(review.ratings).map(([key, value]) => (
            <RatingValue key={key} title={titleMap[key]} rating={value} />
            ))}
        </div>
    </div>

    );
  }
  

export default FocusRatings