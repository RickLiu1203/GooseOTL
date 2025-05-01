import { useState } from 'react'
import FocusRatings from '../Molecules/Reviews/FocusRatings';
import FocusReviewCourses from '../Molecules/Reviews/FocusReviewCourses';
import FocusReviewHead from '../Molecules/Reviews/FocusReviewHead';
import FocusSuggestions from '../Molecules/Reviews/FocusSuggestions';
import FocusWrittenReview from '../Molecules/Reviews/FocusWrittenReview';
import CollapseIcon from '../Atoms/Reviews/CollapseIcon';
import PageSpacer from '../Atoms/PageSpacer';

interface Props{
    review: any;
    index: number;
}

function ReviewInfo({review, index}: Props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }
    return (
        <div key={index} className={`flex flex-col w-full ${!collapsed && 'gap-6'}`}>
            <div className={'flex w-full justify-between pe-2'}>
                <FocusReviewHead name={review.name} program={review.program} exchangeTerm={review.exchangeTerm} exchangeTime={review.exchangeTime} />
                <CollapseIcon collapsed={collapsed} setCollapsed={toggleCollapse}/>
            </div>
            {!collapsed &&
            <>
             <FocusRatings review={review}/>
             <FocusReviewCourses academics={review.academics}/>
             <FocusWrittenReview review={review.reviewText} />
             <FocusSuggestions suggestions={review.suggestions} />
            </>
            }
        <PageSpacer />
        </div>
    )
}

export default ReviewInfo