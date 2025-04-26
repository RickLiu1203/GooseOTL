import React from 'react'
import SubtitleItem from '../Atoms/SubtitleItem';
import { IoLocationOutline, IoSchoolOutline, IoCalendarClearOutline } from "react-icons/io5";

interface Props{
  location: string;
  terms: string;
  levels: string;
}

function FocusSubtitles({location, terms, levels}: Props) {
  return (
    <div className='flex flex-col text-gray-500 gap-1'>
        <SubtitleItem icon={IoLocationOutline} text={location} />
        <SubtitleItem icon={IoSchoolOutline} text={levels} />
        <SubtitleItem icon={IoCalendarClearOutline} text={terms} />
    </div>
  )
}

export default FocusSubtitles