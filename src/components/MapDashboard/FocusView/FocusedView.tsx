'use client';

import { useState, useEffect, useRef } from "react";
import { useSidebarContext } from "../../../providers/SidebarProvider"; // ✅ Use SidebarContext
import FocusTitle from "./Molecules/FocusTitle";
import FocusSubtitles from "./Molecules/FocusSubtitles";
import FocusFaculties from "./Molecules/FocusFaculties";
import HeaderImage from "./Atoms/HeaderImage";
import BackButton from "./Atoms/BackButton";
import FocusTerms from "./Molecules/SchoolDetails/FocusTerms";
import FocusRequirements from "./Molecules/SchoolDetails/FocusRequirements";
import FocusCourses from "./Molecules/SchoolDetails/FocusCourses";

interface Props {
    schoolData: Record<string, any>;
}

function FocusView({ schoolData }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    // const { setSidebarState, state, focusedId } = useSidebarContext();
    const state = "focused";
    const focusedId = "123"; // Dummy non-null value

    const SCHOOL_NAME = schoolData.name;
    const SPOTS_OBJECT = schoolData.spots;
    const LOCATION_NAME = schoolData.location.name;
    const ACADEMIC_LEVELS = schoolData.academicLevels;
    const TERMS = schoolData.termDetails.available;
    const TERM_DETAILS = schoolData.termDetails.termInfo;
    const REQUIREMENTS = schoolData.requirements;
    const FACULTIES = schoolData.faculties;
    const EXAM_DETAILS = schoolData.termDetails.exams;
    const TERM_LINKS = schoolData.termDetails.links;
    const COURSES_IMPORTANT = schoolData.courseDetails.important;
    const COURSES_CREDITS = schoolData.courseDetails.credits;
    const COURSES_LINKS = schoolData.courseDetails.links;
    const COURSES_TRANSCRIPT = schoolData.courseDetails.transcript;
    
    const [showFocusInfo, setShowFocusInfo] = useState(false);
    
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
              setScrollY(scrollRef.current.scrollTop); // 👈 use scrollTop instead of window.scrollY
            }
          };
      
          const div = scrollRef.current;
          if (div) {
            div.addEventListener('scroll', handleScroll);
          }
      
          return () => {
            if (div) {
              div.removeEventListener('scroll', handleScroll);
            }
          };
    }, []);

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

    const backButtonClick = () => {
        const div = scrollRef.current;
        if (scrollY >= 250 && div) {
            div.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        }
    };
    

    return (
        <div ref={scrollRef} className="text-black flex flex-col w-full relative overflow-y-scroll">
            {showFocusInfo && (
                <>
                    <HeaderImage />
                    <BackButton backClick={backButtonClick} yPos={scrollY}/>
                    <div className="flex flex-col bg-white w-full p-10 gap-2 rounded-t-2xl z-20 mt-[60%]">
                        <FocusTitle school={SCHOOL_NAME} spotsObject={SPOTS_OBJECT} />
                        <FocusSubtitles location={LOCATION_NAME} levels={ACADEMIC_LEVELS.join(" & ")} terms={TERMS.join(", ")}/>
                        <FocusFaculties faculties={FACULTIES} />
                        <div className="flex flex-col gap-2">
                            <FocusRequirements requirementDetails={REQUIREMENTS}/>
                            <FocusTerms termDetails={TERM_DETAILS} exams={EXAM_DETAILS} links={TERM_LINKS}/>
                            <FocusCourses important={COURSES_IMPORTANT} credits={COURSES_CREDITS} links={COURSES_LINKS} transcript={COURSES_TRANSCRIPT}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default FocusView;
