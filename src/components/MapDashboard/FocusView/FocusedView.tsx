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
import FocusTerms from "./Molecules/SchoolDetails/FocusTerms";
import FocusRequirements from "./Molecules/SchoolDetails/FocusRequirements";

interface Props {
    schoolData: Record<string, any>;
}

function FocusView({ schoolData }: Props) {
    // const { setSidebarState, state, focusedId } = useSidebarContext();
    const state = "focused";
    const focusedId = "123"; // Dummy non-null value

    const SCHOOL_NAME = schoolData.name;
    const SPOTS_OBJECT = schoolData.spots;
    const LOCATION_NAME = schoolData.location.name;
    const ACADEMIC_LEVELS = schoolData.academicLevels;
    const TERMS = schoolData.terms;
    const TERM_DETAILS = schoolData.termDetails;
    const REQUIREMENTS = schoolData.requirements;
    const FACULTIES = schoolData.faculties;
    
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

    if (state !== "focused" || focusedId === null) return null;

    // const subtitleData = {
    //     location: schoolData.location,
    //     terms: schoolData.studyTerms.join(", "),
    //     levels: schoolData.academicLevels.join(", "),
    // };

    // const handleBackClick = () => {
    //     setSidebarState("list"); // ✅ Switch back to school list
    // };

    return (
        <div className="text-black flex flex-col w-full h-full relative">
            {showFocusInfo && (
                <>
                    <HeaderImage />
                    <BackButton backClick={() => {}} />
                    <div className="flex flex-col bg-white absolute w-full h-full top-1/3 p-10 gap-4">
                        <FocusTitle school={SCHOOL_NAME} spotsObject={SPOTS_OBJECT} />
                        <FocusSubtitles location={LOCATION_NAME} levels={ACADEMIC_LEVELS.join(" & ")} terms={TERMS.join(", ")}/>
                        <FocusFaculties faculties={FACULTIES} />
                        <FocusTerms termDetails={TERM_DETAILS}/>
                        <FocusRequirements requirementDetails={REQUIREMENTS}/>
                    </div>
                </>
            )}
        </div>
    );
}

export default FocusView;
