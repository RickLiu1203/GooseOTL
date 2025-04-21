'use client';

import React from 'react';
import { useSidebarContext } from '@/providers/SidebarProvider'; // ✅ Use SidebarContext
import SubtitlesList from './SubtitlesList';
import PreviewImage from '../Atoms/PreviewImage';

interface Props {
    name: string;
    subtitleDataObj: SubtitleDataObj;
}

interface SubtitleDataObj {
    location: string;
    terms: string;
    levels: string;
}

function ListBox({ name, subtitleDataObj }: Props) {
    const { setSidebarState } = useSidebarContext(); // ✅ Use sidebar context

    const handleClick = () => {
        setSidebarState("focused", 1); // ✅ Still hardcoded to ID 1 for now
    };

    return (
        <div 
            onClick={handleClick} 
            className="relative flex flex-row-reverse w-9/10 rounded-xl text-black border-gray-200 border-2 bg-white cursor-pointer hover:shadow-md transition-all"
        >
            <PreviewImage />
            <div className="flex flex-col gap-2 w-2/3 p-4">
                <h3 className="font-bold text-xl">{name}</h3>
                <SubtitlesList subtitleDataObj={subtitleDataObj} />
            </div>
        </div>
    );
}

export default ListBox;
