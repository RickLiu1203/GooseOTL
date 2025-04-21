import React, { useEffect, useState } from "react";
import Faculties from "./Molecules/Faculties";
import Terms from "./Molecules/Terms";
import searchData from "@data/searchData.json";
import Locations from "./Molecules/Locations";
import StudyLevels from "./Molecules/StudyLevel";
import FilterNavHeader from "./Atoms/FilterNavHeader";
import ConfirmButton from "./Atoms/ConfirmButton";
import FilterSpacer from "./Atoms/FilterSpacer";
import ClearAll from "./Atoms/ClearAll";

function FilterView() {
  interface Filters {
    faculties: {
      names: string[];
      counter: number;
    };
    terms: {
      names: string[];
      counter: number;
    };
  }

  const initialTrueFilters: Filters = {
    faculties: { names: [], counter: 0 },
    terms: { names: [], counter: 0 }
  };

  const [trueFilters, setTrueFilters] = useState<Filters>(initialTrueFilters);
  const [trueCounter, setTrueCounter] = useState<number>(0);
  const [filteredData, setFilteredData] = useState(searchData); // Stores filtered results

  // Function to update filters dynamically
  const handleUpdateFilters = (category: string, newArray: string[], counter: number) => {
    setTrueFilters(prevTrueFilters => ({
      ...prevTrueFilters,
      [category]: {
        names: newArray,
        counter: counter
      }
    }));
  };

  const clearAllFilters = () => {
    setTrueFilters(initialTrueFilters);
  }

  // Update filter count
  useEffect(() => {
    const total = Object.values(trueFilters).reduce((acc, category) => acc + category.counter, 0);
    setTrueCounter(total);
  }, [trueFilters]);

  useEffect(() => {
    const { faculties, terms } = trueFilters;

    // Filter searchData based on selected faculties & terms
    const filteredResults = searchData.filter(school => {
      const matchesFaculty =
        faculties.names.length === 0 || school.faculties.some(faculty => faculties.names.includes(faculty));

      const matchesTerm =
        terms.names.length === 0 || school.terms.some(term => terms.names.includes(term));

      return matchesFaculty && matchesTerm;
    });

    setFilteredData(filteredResults);
  }, [trueFilters]);

  return (
    <div className="relative flex flex-col w-full h-full px-6 py-6">
        <div className='flex w-full justify-between gap-4'>
            <ClearAll handleClear={clearAllFilters}/>
            <FilterNavHeader />
        </div>
        <StudyLevels handleUpdate={handleUpdateFilters} />
        <Faculties handleUpdate={handleUpdateFilters} parentCount={trueFilters.faculties.counter}/>
        <Terms handleUpdate={handleUpdateFilters} />
        <Locations handleUpdate={handleUpdateFilters}/>
        <ConfirmButton filterCounter={trueCounter} schoolCounter={filteredData.length}/>
        <FilterSpacer />
    </div>
  );
}

export default FilterView;
