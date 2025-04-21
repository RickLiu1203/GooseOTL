"use client";

import { useSidebarContext } from "../../../../providers/SidebarProvider";
import schoolData from "../../../../../data/datatest.json";
import FilterView from "../../FilterView/FilterView";
import FocusView from "../../FocusView/FocusedView";
import SearchList from "../../SearchList/SearchList";

function SideBox() {
  const { state, focusedId } = useSidebarContext();

  return (
    <div className="flex flex-col items-center bg-slate-100 h-full overflow-y-scroll no-scrollbar relative transition-all duration-500 w-full">
      {/* {state === "focused" && focusedId !== null && <FocusView schoolId={focusedId} />} */}
      {state === "focused" && <FocusView schoolData={schoolData}/>}
      {state === "list" && <SearchList schoolData={schoolData}/>}
      {state === "filter" && <FilterView />}
    </div>
  );
}

export default SideBox;