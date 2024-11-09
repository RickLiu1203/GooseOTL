'use client';

import { useState, useEffect } from 'react'
import { json } from 'stream/consumers';
import { useFocusContext } from '../../../providers/FocusProvider'
import FocusTitle from '../molecules/FocusTitle';
import FocusSubtitles from '../molecules/FocusSubtitles';
import FocusFaculties from '../molecules/FocusFaculties';
import PageSpacer from '../atoms/FocusView/PageSpacer';
import HeaderImage from '../atoms/FocusView/HeaderImage';
import BackButton from '../atoms/FocusView/BackButton';
import FocusTextList from '../molecules/FocusTextList';

interface Props {
    schoolData: Record<string, any>;
}

function FocusInfo({ schoolData }: Props) {
    const { setFocus, focusedId } = useFocusContext();
    const { focused } = useFocusContext();

    const [showFocusInfo, setShowFocusInfo] = useState(false);

    useEffect(() => {
        if (focused) {
            const timer = setTimeout(() => {
                setShowFocusInfo(true);
            }, 200); 
            return () => clearTimeout(timer);
        } else {
            setShowFocusInfo(false);
        }
    }, [focused]);

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
        <div className='text-black flex flex-col w-full h-full relative'>
            {showFocusInfo &&
                <>
                    <HeaderImage />
                    <BackButton backClick={handleBackClick} />
                    <div className='flex flex-col bg-white absolute w-full top-1/3 rounded-3xl p-10 gap-4'>
                        <FocusTitle school={schoolData.name} spotsObj={schoolData.likeliness}/>
                        <FocusSubtitles subtitleDataObj={subtitleData} />
                        <FocusFaculties faculties={schoolData.openTo} />
                        <PageSpacer />
                        <FocusTextList />
                        <PageSpacer />
                        <FocusTextList />
                        <PageSpacer />
                        <FocusTextList />
                        <PageSpacer />
                    </div>
                </>
            }
        </div>
    )
}

export default FocusInfo