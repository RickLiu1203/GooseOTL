'use client';

import React from 'react'
import { json } from 'stream/consumers';
import { useFocusContext } from '../../../providers/FocusProvider'
import FocusTitle from '../molecules/FocusTitle';
import FocusSubtitles from '../molecules/FocusSubtitles';
import FocusFaculties from '../molecules/FocusFaculties';
import PageSpacer from '../atoms/FocusView/PageSpacer';
import HeaderImage from '../atoms/FocusView/HeaderImage';
import BackButton from '../atoms/FocusView/BackButton';

interface Props {
    schoolData: Record<string, any>;
}

function FocusInfo({ schoolData }: Props) {
    const { setFocus, focusedId } = useFocusContext();
    const subtitleData: {
        location: string;
        terms: string;
        levels: string;
    } = {
        location: schoolData.location,
        terms: schoolData.studyTerms.join(", "),
        levels: schoolData.academicLevels.join(", "),
    };
    

    const handleBackClick = () => {
        setFocus(null); 
    };

    return (
        <div className='text-black flex flex-col bg-slate-100 w-full h-full relative'>
            <HeaderImage />
            <BackButton backClick={handleBackClick} />
            <div className='flex flex-col bg-white absolute w-full top-1/3 rounded-xl p-6 gap-4'>
                <FocusTitle school={schoolData.name} spotsObj={schoolData.likeliness}/>
                <FocusSubtitles subtitleDataObj={subtitleData} />
                <FocusFaculties faculties={schoolData.openTo} />
                <PageSpacer />
            </div>
        </div>
    )
}

export default FocusInfo