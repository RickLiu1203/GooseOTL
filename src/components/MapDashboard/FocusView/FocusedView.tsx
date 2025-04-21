'use client';

import { useState, useEffect } from "react";
import { useSidebarContext } from "../../../providers/SidebarProvider"; // ✅ Use SidebarContext
import FocusTitle from "./Molecules/FocusTitle";
import FocusSubtitles from "./Molecules/FocusSubtitles";
import FocusFaculties from "./Molecules/FocusFaculties";
import PageSpacer from "./Atoms/PageSpacer";
import HeaderImage from "./Atoms/HeaderImage";
import BackButton from "./Atoms/BackButton";
import FocusTextList from "./Molecules/FocusTextList";

interface Props {
    schoolData: Record<string, any>;
}

function FocusView({ schoolData }: Props) {
    const { setSidebarState, state, focusedId } = useSidebarContext(); // ✅ Use SidebarContext
    const [showFocusInfo, setShowFocusInfo] = useState(false);

    useEffect(() => {
        if (state === "focused") {
            const timer = setTimeout(() => {
                setShowFocusInfo(true);
            }, 200);
            return () => clearTimeout(timer);
        } else {
            setShowFocusInfo(false);
        }
    }, [state]);

    // ✅ Ensure we only display data for the focused school
    if (state !== "focused" || focusedId === null) return null;

    const subtitleData = {
        location: schoolData.location,
        terms: schoolData.studyTerms.join(", "),
        levels: schoolData.academicLevels.join(", "),
    };

    const handleBackClick = () => {
        setSidebarState("list"); // ✅ Switch back to school list
    };

    return (
        <div className="text-black flex flex-col w-full h-full relative">
            {showFocusInfo && (
                <>
                    <HeaderImage />
                    <BackButton backClick={handleBackClick} />
                    <div className="flex flex-col bg-white absolute w-full top-1/3 p-10 gap-4">
                        <FocusTitle school={schoolData.name} spotsObj={schoolData.likeliness} />
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
            )}
        </div>
    );
}

export default FocusView;
