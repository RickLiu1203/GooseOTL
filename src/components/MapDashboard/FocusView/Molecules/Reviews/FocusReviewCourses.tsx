import React from 'react'
import ReviewSectionTitle from '../../Atoms/Reviews/ReviewSectionTitle'
import CourseTableRow from '../../Atoms/Reviews/CourseTableRow'
import CourseTableHead from '../../Atoms/Reviews/CourseTableHead'
import RatingValue from '../../Atoms/Reviews/RatingValue'

interface courseTableRowObj{
    course: string;
    difficulty: number;
}

interface academicsObj{
    overallDifficulty: number;
    courses: courseTableRowObj[];
}

interface Props{
    academics: academicsObj;
}

function FocusReviewCourses({ academics }: Props) {
    return (
    <div className='flex flex-col gap-4'>
        <ReviewSectionTitle title="Academics" icon="👨‍🏫" />
        <RatingValue title={'Overall Difficulty'} rating={academics.overallDifficulty} />
        <div className='flex flex-col gap-1'>
            <CourseTableHead />
            {academics.courses.sort(({difficulty}) => difficulty).map(({course, difficulty}, index: number) => (
                <CourseTableRow key={index} course={course} difficulty={difficulty}/>
            ))}
        </div>
    </div>
  )
}

export default FocusReviewCourses