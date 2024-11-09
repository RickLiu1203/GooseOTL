import React from 'react'
import SubtitleItem from '../Atoms/SubtitleItem';
import { IoLocationOutline, IoSchoolOutline, IoCalendarClearOutline } from "react-icons/io5";

interface Props{
    subtitleDataObj: SubtitleDataObj;
}

interface SubtitleDataObj{
    location: string;
    terms: string;
    levels: string;
}

function FocusSubtitles({subtitleDataObj}: Props) {
  return (
    <div className='flex flex-col text-slate-500 gap-1'>
        <SubtitleItem icon={IoLocationOutline} text={subtitleDataObj.location} />
        <SubtitleItem icon={IoSchoolOutline} text={subtitleDataObj.levels} />
        <SubtitleItem icon={IoCalendarClearOutline} text={subtitleDataObj.terms} />
    </div>
  )
}

export default FocusSubtitles